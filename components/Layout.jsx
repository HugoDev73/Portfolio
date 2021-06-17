import Navigation from "./Navigation";
import Head from "next/head";
import Footer from "./Footer";


/* import NProgress from "nprogress";
import nProgress from "nprogress";

import { useEffect } from "react";
import { useRouter } from "next/router"; */

const Container = ({ children }) => {
  /* const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
 */
  return (
    <>
      <Head>
        <title>Hugo Mendoza</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
        />
      </Head>
      <Navigation />
      <div className="mt-20">{children}</div>
      <Footer />
    </>
  );
};

export default Container;
