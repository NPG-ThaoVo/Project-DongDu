import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

const Banner = (props) => {
  const router = useRouter();
  const nameUrl = router.pathname;
  const value = nameUrl.split(1).join().slice(1);
  return (
    <div>
      <Head>
        <link
          key="/css/contact-banner.css"
          rel="stylesheet"
          href="/css/contact-banner.css"
        />
      </Head>
      <section className="visual">
        <div
          className="visual-inner visual-banner-v22 dark-overlay parallax"
          data-stellar-background-ratio="0.55"
          style={{ backgroundPosition: "50% -22.5px" }}
        >
          <div className="container">
            <div className="visual-text-large text-left visual-center">
              <div className="visual-title">
                <h1>Media Embeds</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                porro laudantium sequi. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a> Home </a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a> {value} </a>
                    </Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
