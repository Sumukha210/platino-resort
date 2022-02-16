import "../styles/style.scss";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
