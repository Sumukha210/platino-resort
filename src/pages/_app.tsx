import type { AppProps } from "next/app";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: any) {
  console.log("component", Component.requireAuth);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
