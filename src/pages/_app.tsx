import React from "react";
import type { AppProps } from "next/app";
import Layout from "common/components/layout";
import { GlobalStyle } from "common/styles";
import MenuOpenContextProvider from "common/context/menuOpenContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuOpenContextProvider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </MenuOpenContextProvider>
  );
}
