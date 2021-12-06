import React from "react";
import Head from "next/head";
import BodyBlog from "../../components/Blog/BodyBlog";
import HeaderBlog from "../../components/Blog/HeaderBlog";
import FooterBlog from "../../components/Blog/FooterBlog";

export default function Blog() {
  return (
    <>
      <Head>
        <link media="all" rel="stylesheet" href="/css/Blog.css" />
      </Head>
      {/* <!-- main wrapper --> */}
      <div id="wrapper">
        <div className="page-wrapper">
          {/* <!-- header of the page --> */}

          <main>
            {/* <!-- main content wrapper --> */}
            <div className="content-wrapper">
              <section className="content-block">
                <div className="container">
                  <div className="row mt-5">
                    <div className="col-lg-12 less-wide">
                      <HeaderBlog />
                      <BodyBlog />
                      <FooterBlog />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* <!--/main content wrapper --> */}
          </main>
        </div>
      </div>
      {/* <!-- search form wrapper --> */}
    </>
  );
}
