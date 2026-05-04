This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Expense Transaction API

This project includes `POST /api/transactions` for logging expense transactions into Google Sheets.

### Request

Send a JSON body with:

- `amount` number, required
- `category` string, optional
- `note` string, optional

The server adds the date automatically and writes the row in this order:

1. Date
2. Category
3. Note
4. Amount

### Environment variables

Set these in your deployment environment and local `.env.local`:

- `GOOGLE_CLIENT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `GOOGLE_SHEET_ID`
- `GOOGLE_SHEET_NAME`
- `API_SECRET_KEY`

### Google Cloud setup

1. Create or choose a Google Cloud project.
2. Enable the Google Sheets API.
3. Create a service account.
4. Create and download a JSON key for that service account.
5. Copy the service account client email into `GOOGLE_CLIENT_EMAIL`.
6. Copy the private key into `GOOGLE_PRIVATE_KEY`.

### Google Sheets setup

1. Create a Google Sheet.
2. Put these headers in row 1 of the target tab:
   - `Date`
   - `Category`
   - `Note`
   - `Amount`
3. Share the sheet with the service account email as an Editor.
4. Set `GOOGLE_SHEET_ID` to the spreadsheet ID from the URL.
5. Set `GOOGLE_SHEET_NAME` to the exact sheet tab name.

### Example cURL request

```bash
curl -X POST http://localhost:3000/api/transactions \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_SECRET_KEY" \
  -d '{
    "amount": 129.5,
    "category": "Food",
    "note": "Lunch"
  }'
```

### Debug mode

Add `?debug=1` to the request URL to bypass Google Sheets and the API key check, then just echo what the server received.

Example:

```bash
curl -X POST "http://localhost:3000/api/transactions?debug=1" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 129.5,
    "category": "Food",
    "note": "Lunch"
  }'
```

### iPhone Shortcuts setup

Use the Shortcuts app with **Get Contents of URL**:

1. Set the URL to `https://your-domain.com/api/transactions`.
2. Set Method to `POST`.
3. Add headers:
   - `Content-Type: application/json`
   - `x-api-key: YOUR_SECRET_KEY`
4. Set the request body to JSON with keys:
   - `amount`
   - `category`
   - `note`
5. Make sure `amount` is passed as a number, not text.

For debugging, temporarily change the URL to `https://your-domain.com/api/transactions?debug=1` and remove the `x-api-key` header entirely.

Example JSON body:

```json
{
  "amount": 129.5,
  "category": "Food",
  "note": "Lunch"
}
```
