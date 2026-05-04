const crypto = require("crypto");
const https = require("https");

const GOOGLE_SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets";
const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const GOOGLE_SHEETS_API_BASE = "https://sheets.googleapis.com/v4/spreadsheets";

function requireEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function sendError(res, statusCode, error) {
  return res.status(statusCode).json({
    success: false,
    error,
  });
}

function sendSuccess(res, statusCode, payload) {
  return res.status(statusCode).json({
    success: true,
    ...payload,
  });
}

function base64Url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function requestJson(url, options) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (response) => {
      const chunks = [];

      response.on("data", (chunk) => {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      });

      response.on("end", () => {
        const text = Buffer.concat(chunks).toString("utf8");

        try {
          resolve({
            statusCode: response.statusCode || 0,
            text,
            json: text ? JSON.parse(text) : null,
          });
        } catch {
          resolve({
            statusCode: response.statusCode || 0,
            text,
            json: null,
          });
        }
      });
    });

    req.on("error", reject);

    if (options.body) {
      req.write(options.body);
    }

    req.end();
  });
}

function signJwt(privateKey, email) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: email,
    scope: GOOGLE_SHEETS_SCOPE,
    aud: GOOGLE_TOKEN_URL,
    iat: now,
    exp: now + 3600,
  };

  const signingInput = `${base64Url(JSON.stringify(header))}.${base64Url(
    JSON.stringify(payload)
  )}`;
  const signer = crypto.createSign("RSA-SHA256");

  signer.update(signingInput);
  signer.end();

  const signature = signer.sign(privateKey);

  return `${signingInput}.${base64Url(signature)}`;
}

async function getAccessToken() {
  const clientEmail = requireEnv("GOOGLE_CLIENT_EMAIL");
  const privateKey = requireEnv("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
  const assertion = signJwt(privateKey, clientEmail);
  const body = new URLSearchParams({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion,
  }).toString();

  const response = await requestJson(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": Buffer.byteLength(body).toString(),
    },
    body,
  });

  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(`Google token request failed: ${response.text}`);
  }

  const json = response.json;

  if (!json || !json.access_token) {
    throw new Error("Google token request did not return an access token.");
  }

  return json.access_token;
}

function normalizeText(value) {
  return typeof value === "string" ? value : "";
}

function formatSheetDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Asia/Manila",
  }).format(date);
}

async function getNextRowIndex(accessToken) {
  const sheetId = requireEnv("GOOGLE_SHEET_ID");
  const sheetName = requireEnv("GOOGLE_SHEET_NAME");
  const range = `'${sheetName.replace(/'/g, "''")}'!A:A`;
  const url = `${GOOGLE_SHEETS_API_BASE}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(
    range
  )}`;

  const response = await requestJson(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(`Google Sheets read failed: ${response.text}`);
  }

  const json = response.json;
  const rows = Array.isArray(json && json.values) ? json.values : [];

  return rows.length + 1;
}

async function writeRow(row, accessToken) {
  const sheetId = requireEnv("GOOGLE_SHEET_ID");
  const sheetName = requireEnv("GOOGLE_SHEET_NAME");
  const rowIndex = await getNextRowIndex(accessToken);
  const range = `'${sheetName.replace(/'/g, "''")}'!A${rowIndex}:D${rowIndex}`;
  const url = `${GOOGLE_SHEETS_API_BASE}/${encodeURIComponent(sheetId)}/values/${encodeURIComponent(
    range
  )}?valueInputOption=USER_ENTERED`;
  const body = JSON.stringify({
    values: [[row.date, row.category, row.note, row.amount]],
  });

  const response = await requestJson(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body).toString(),
    },
    body,
  });

  if (response.statusCode < 200 || response.statusCode >= 300) {
    throw new Error(`Google Sheets write failed: ${response.text}`);
  }

  const json = response.json;

  return {
    updatedRange: json && json.updatedRange ? json.updatedRange : undefined,
    rowIndex,
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendError(res, 405, "Method not allowed");
  }

  try {
    const body = req.body || {};
    const debugMode =
      req.query && (req.query.debug === "1" || req.query.debug === "true");

    if (debugMode) {
      return sendSuccess(res, 200, {
        mode: "debug",
        method: req.method,
        date: formatSheetDate(new Date()),
        received: {
          amount: body.amount,
          category: normalizeText(body.category),
          note: normalizeText(body.note),
        },
        headers: {
          "content-type": req.headers["content-type"] || null,
          "x-api-key": typeof req.headers["x-api-key"] === "string" ? "present" : "missing",
        },
      });
    }

    const expectedApiKey = requireEnv("API_SECRET_KEY");
    const providedApiKey = req.headers["x-api-key"];

    if (typeof providedApiKey !== "string" || providedApiKey !== expectedApiKey) {
      return sendError(res, 401, "Unauthorized");
    }

    const amount = body.amount;

    if (typeof amount !== "number" || !Number.isFinite(amount)) {
      return sendError(res, 400, "`amount` is required and must be a valid number.");
    }

    const date = formatSheetDate(new Date());
    const accessToken = await getAccessToken();
    const appendedRow = await writeRow({
      date,
      amount,
      category: normalizeText(body.category),
      note: normalizeText(body.note),
    }, accessToken);

    return res.status(200).json({
      success: true,
      message: "Transaction logged successfully.",
      date,
      appendedRange: appendedRow.updatedRange,
    });
  } catch (error) {
    console.error("Failed to append transaction:", error);
    return sendError(res, 500, "Failed to log transaction.");
  }
};
