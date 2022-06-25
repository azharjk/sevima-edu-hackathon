import "../styles/globals.css";
import type { AppProps } from "next/app";

import Header from "../components/Header";

// FIXME: Do not render Header on register and login
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
