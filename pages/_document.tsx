// next
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body data-bs-theme='light'>
        <Main />
        <NextScript />
        <Script
          src='/scripts/bootstrap/bootstrap.bundle.js'
          strategy='beforeInteractive'
        />
        <Script
          src='https://kit.fontawesome.com/c001ba2b15.js'
          strategy='beforeInteractive'
        />
      </body>
    </Html>
  );
}
