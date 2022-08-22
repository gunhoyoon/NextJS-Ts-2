import "../styles/globals.css";
import type { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/component/Top/Top";
import Footer from "../src/component/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Top />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
