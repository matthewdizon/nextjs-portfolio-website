import Head from "next/head";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";
import Script from "next/script";

const StyledLayout = styled.div``;

export default function Layout({
  children,
  title,
  description,
  image,
  showFooter = true,
}) {
  const metaTitle = title
    ? `Matthew Dizon | ${title}`
    : "Matthew Dizon | Full-Stack Software Engineer";
  const metaDescription =
    description ||
    "Full-stack software engineer building modern, accessible web experiences.";
  const metaImage =
    image || "https://www.matthewdizon.com/wedding.jpeg";

  return (
    <StyledLayout>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.matthewdizon.com/" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.matthewdizon.com/" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <Navbar />
      <main>{children}</main>
      {showFooter ? <Footer /> : null}
    </StyledLayout>
  );
}
