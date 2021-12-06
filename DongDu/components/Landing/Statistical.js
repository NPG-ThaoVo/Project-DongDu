import { useEffect } from "react";

const Statistical = (props) => {
  useEffect(() => {
    const counterUp = window.counterUp?.default;

    if (counterUp) {
      const callback = (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 2000,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      };

      const IO = new IntersectionObserver(callback, { threshold: 1 });

      const el = document.querySelectorAll(".number");

      console.log(el);
      el.forEach((e) => !!e && IO.observe(e));
    }
    // IO.observe(el);
  }, []);
  return (
    <>
      <section
        className="content-block count-block text-center p-0 parallax"
        data-stellar-background-ratio="0.55"
      >
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-sm-6 col-lg-3">
              <div className="col-wrap">
                <div className="icon">
                  <span className="custom-icon-projects"></span>
                </div>
                <h3 className="number">505</h3>
                <div className="text text-uppercase">BÀI TẬP</div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="col-wrap">
                <div className="icon">
                  <span className="custom-icon-smile"></span>
                </div>
                <h3 className="number">220</h3>
                <div className="text text-uppercase">NGƯỜI DÙNG</div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="col-wrap">
                <div className="icon">
                  <span className="custom-icon-award"></span>
                </div>
                <h3 className="number">720</h3>
                <div className="text text-uppercase">KHÓA HỌC</div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="col-wrap">
                <div className="icon">
                  <span className="custom-icon-celebrate"></span>
                </div>
                <h3 className="number">707</h3>
                <div className="text text-uppercase">SỰ KIỆN</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistical;
