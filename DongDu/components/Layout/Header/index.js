import { isDocumentNode } from "@apollo/client/utilities";
import Head from "next/head";
import { useEffect, useRef } from "react";
import ScrollToTop from "../ScrollToTop";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = (props) => {
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (
      router.pathname.includes("blog-detail") ||
      router.pathname.includes("signin") ||
      router.pathname.includes("signup")
    ) {
      if (headerRef.current) {
        headerRef?.current.classList.add("sticky-nav");
        return;
      }
    }
    const smallNav = (e) => {
      if (headerRef.current) {
        // console.log(window.scrollY);
        if (window.scrollY > 10) headerRef.current.classList.add("sticky-nav");
        else headerRef.current.classList.remove("sticky-nav");
      }
    };

    window.addEventListener("scroll", smallNav);

    return () => {
      window.removeEventListener("scroll", smallNav);
    };
  });
  // const goToSection = (e) => {
  //   const target = e.target;
  //   const value = target.attributes[2];
  //   const scrollTo = value.offset().top;
  //   window.animate({ scrollTop: scrollTo + "px" }, 800);
  // };

  return (
    <>
      <Head>
        <link media="all" rel="stylesheet" href="/css/header.css" />
      </Head>
      <header
        ref={headerRef}
        className="fixed-top main-header header-white transparent with-icons"
        id="waituk-main-header"
      >
        <div id="nav-section">
          <div
            className="bottom-header container-fluid mega-menus"
            id="mega-menus"
          >
            <nav
              className="navbar navbar-expand-lg navbar-toggleable-md no-border-radius no-margin mega-menu-multiple navbar-hover"
              id="navbar-inner-container"
            >
              <button
                type="button"
                className="navbar-toggler navbar-toggler-left"
                data-toggle="collapse"
                data-target="#mega-menu"
                aria-expanded="true"
              >
                <label htmlFor="navbar-header" className="navbar-header-button">
                  <span className="navbar-toggler-icon"></span>
                </label>
              </button>
              <Link href="/">
                <a className="navbar-brand mr-auto m-xs-auto navbar-center-items ">
                  <img src="/images/logo-obdd-light.svg" alt="roxine" />
                  <img src="/images/logo-obdd-dark.svg" alt="roxine" />
                  {/* <div className="navbar-logo">OBDD-MT</div> */}
                </a>
              </Link>
              <input id="navbar-header" type="checkbox" />
              <div
                className="collapse navbar-collapse flex-row-reverse"
                id="mega-menu"
              >
                <ul className="nav navbar-nav">
                  <li className="" data-animation="fadeIn">
                    <Link href="/">
                      <a className="" data-toggle="" data-title="Home">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="" data-animation="fadeIn">
                    <Link href="/#obog">
                      <a className="" data-toggle="" data-title="Home">
                        OBOG
                      </a>
                    </Link>
                  </li>
                  <li className="" data-animation="fadeIn">
                    <Link href="/blog-list">
                      <a className="" data-toggle="" data-title="Home">
                        BLOG
                      </a>
                    </Link>
                  </li>
                  <li className="" data-animation="fadeIn">
                    <Link href="/contact">
                      <a className="" data-toggle="" data-title="Pages">
                        CONTACT
                      </a>
                    </Link>
                  </li>
                  <li data-animation="fadeIn">
                    <Link href="/signin">
                      <a data-toggle="" data-title="Pages">
                        LOGIN
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <ScrollToTop />
    </>
  );
};
export default Header;
