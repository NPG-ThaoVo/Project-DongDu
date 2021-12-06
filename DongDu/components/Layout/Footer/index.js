import Head from "next/head";
import Link from "next/link";

const Footer = (props) => {
  return (
    <>
      <Head>
        <link media="all" rel="stylesheet" href="/css/footer.css" />
      </Head>
      <footer className="footer footer-v1">
        <div className="content-block footer-main">
          <div className="container">
            <div className="row align-center position-relative">
              <div className="col-md-4">
                <div className="footer-logo">
                  <img
                    src="/images/logo-obdd-light.svg"
                    alt="image-description"
                  />
                  {/* OBDD-MT */}
                </div>
              </div>
              <div className="col-12 footer-nav-container">
                <div className="footer-nav inline-nav">
                  <ul>
                    <li>
                      <Link href="/">
                        <a>HOME</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#obog">
                        <a>OBOG</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-list">
                        <a>BLOG</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <p>© 2021 OBDD-MT. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
