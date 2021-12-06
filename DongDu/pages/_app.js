import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import Fonts from "../util/fonts";
import { client } from "../apolo-client";
import React, { useEffect } from "react";
import store from "../redux/store.js";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  }, []);
  return (
    <>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
