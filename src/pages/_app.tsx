import Navbar from "@/shared/navbar/Navbar";
import type { AppProps } from "next/app";
import "../styles/style.scss";
// import "bootstrap/scss/grid";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
