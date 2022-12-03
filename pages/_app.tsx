import type { AppProps } from "next/app";
import "the-new-css-reset/css/reset.css";

import Layout from "../common/UI/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    // browser code
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
