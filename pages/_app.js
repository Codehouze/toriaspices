import * as React from "react";

import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
// import  from "@mui/material/CssBaseline";
// import { CacheProvider } from "@emotion/react";
import theme from "../src/theme";
import "../styles/globals.css";
import createEmotionCache from "../src/createEmotionCache";
import Layout from "../Components/layout";

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
