import Head from "next/head";
import { useEffect } from "react";
const Slider = (props) => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dot: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
    $(".owl-carousel").on("mousewheel", ".owl-stage", function (e) {
      if (e.deltaY > 0) {
        $(".owl-carousel").trigger("next.owl");
      } else {
        $(".owl-carousel").trigger("prev.owl");
      }
      e.preventDefault();
    });
  }, []);
  return (
    <div
      style={{
        display: "block",
        position: "relative",
      }}
    >
      <Head>
        <link
          key="/css/contact-banner.css"
          rel="stylesheet"
          href="/css/contact-banner.css"
        />
        <link
          key="/css/contact-slider.css"
          rel="stylesheet"
          href="/css/contact-slider.css"
        />
      </Head>
      <aside className="content-block">
        <div className="container">
          <div className="logo-container">
            <div
              className="owl-carousel logo-slide owl-loaded owl-drag"
              id="waituk-owl-slide-4"
              style={{ overflow: "hidden" }}
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-1581px, 0px, 0px)",
                    transition: "all 0.25s ease 0s",
                    width: 3361,
                  }}
                >
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-01.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-02.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-04.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-01.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-02.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-04.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-01.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-02.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned active"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-04.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-03.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                  <div
                    className="owl-item cloned"
                    style={{ width: 121.667, marginRight: 76 }}
                  >
                    <div className="slide-item">
                      <img
                        src="https://html.waituk.com/roxine/img/logo-01.png"
                        alt="images description"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav disabled">
                <div className="owl-prev">prev</div>
                <div className="owl-next">next</div>
              </div>
              <div className="owl-dots disabled">
                <div className="owl-dot active">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Slider;
