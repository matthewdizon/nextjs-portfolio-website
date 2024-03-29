import Head from "next/head";
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Script from "next/script";

const StyledLayout = styled.div``;

export default function Layout({ children, title }) {
  const router = useRouter();

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
        <title>Matthew Dizon | {title}</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content={`Matthew Dizon | ${title}`} />
        <meta
          name="description"
          content="Hi, I'm Matthew. I'm a student and a software developer who is highly inclined to personal development and blockchain technology."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.matthewdizon.com/" />
        <meta property="og:title" content={`Matthew Dizon | ${title}`} />
        <meta
          property="og:description"
          content="Hi, I'm Matthew. I'm a student and a software developer who is highly inclined to personal development and blockchain technology."
        />
        <meta
          property="og:image"
          content="https://www.matthewdizon.com/wedding.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.matthewdizon.com/" />
        <meta property="twitter:title" content={`Matthew Dizon | ${title}`} />
        <meta
          property="twitter:description"
          content="Hi, I'm Matthew. I'm a student and a software developer who is highly inclined to personal development and blockchain technology."
        />
        <meta
          property="twitter:image"
          content="https://www.matthewdizon.com/wedding.jpeg"
        ></meta>
      </Head>
      <Navbar />
      <main>{children}</main>
      {router.pathname == "/" ? null : <Footer />}
    </StyledLayout>
  );
}
