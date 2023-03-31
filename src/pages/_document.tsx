import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head />
      <body className="body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
