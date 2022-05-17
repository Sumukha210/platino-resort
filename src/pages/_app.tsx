import "../styles/style.scss";
// import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import usePricingStore from "@/store/pricingStore";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const getPricing = usePricingStore(s => s.getPricing);
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/booking" || pathname === "/pricing") {
      getPricing();
    }
  }, [pathname]);

  return (
    <>
      {/* <SessionProvider session={pageProps.session} refetchInterval={0}> */}
      <Component {...pageProps} />
      {/* </SessionProvider>  */}
    </>
  );
}

export default MyApp;
