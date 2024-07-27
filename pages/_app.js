import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import  from "@mui/material/CssBaseline";
// import { CacheProvider } from "@emotion/react";
import theme from "../app/theme";
import "../styles/globals.css";
import createEmotionCache from "../app/createEmotionCache";
import Layout from "../app/components/layout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  // emotionCache = clientSideEmotionCache,
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        {/* <CacheProvider value={emotionCache}> */}
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          {/* FIXME: move this style some where else*/}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@200&family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"
          ></link> */}
        </Head>

        <CssBaseline />
        <Component {...pageProps} />
        {/* </CacheProvider> */}
      </Layout>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
