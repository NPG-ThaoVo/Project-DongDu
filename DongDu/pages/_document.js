import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    const WrappedComponent = (App) =>
      function Wrap(props) {
        return <App {...props} />;
      };

    ctx.renderPage = () =>
      originalRenderPage({
        // useful for wrapping the whole react tree
        enhanceApp: WrappedComponent,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html dir="ltr" lang="en" className="notranslate" translate="no">
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width, user-scalable=no"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          ></meta>

          <title>DONGDU PROJECT</title>

          <link rel="icon" type="image/x-icon" href="/images/favicon.png" />
          {/* bootrap cdn */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css"
          ></link>
          <link
            href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
          />

          {/*eslint-disable */}
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
          {/* eslint-enable */}
        </Head>
        <body>
          <div id="wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
export default MyDocument;
