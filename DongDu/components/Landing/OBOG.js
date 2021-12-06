import { useEffect } from "react";

const OBOG = (props) => {
  useEffect(() => {
    // Testimonial Owl Slider
    const owl = $("#waituk-owl-slide-3");

    owl.owlCarousel({
      loop: true,
      margin: 30,
      responsiveClass: true,
      items: 1,
      nav: true,
      center: true,
      animateOut: "slideOutDown",
      animateIn: "flipInX",
      navText: [
        '<span class="icon-angle-left"></span>',
        '<span class="icon-angle-right"></span>',
      ],
      smartSpeed: 450,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        768: {
          items: 3,
          nav: true,
        },
        1024: {
          items: 3,
          nav: true,
        },
        1600: {
          items: 3,
          // nav: true
        },
      },
    });

    // owl.on("mousewheel", ".owl-stage", function (e) {
    //   if (e.deltaY > 0) {
    //     owl.trigger("next.owl.carousel");
    //   } else {
    //     owl.trigger("prev.owl.carousel");
    //   }
    //   e.preventDefault();
    // });

    return () => {
      owl.trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <>
      <section id="obog" className="content-block bg-gray-light">
        <div className="container">
          <div className="block-heading bottom-space text-center">
            {/* <h3 className="block-top-heading">HEAR FROM</h3> */}
            <h2 className="block-main-heading">OBOG</h2>
            <span className="block-sub-heading">
              We always listen to our clients.
            </span>
            <div className="divider">
              <img src="/images/divider.png" alt="images description" />
            </div>
          </div>
          <div className="testimonial-container text-center">
            <div
              className="owl-carousel testimonial-slide"
              id="waituk-owl-slide-3"
            >
              {Array.from({ length: 10 }).map((_, key) => (
                <CarouselItem
                  key={key}
                  name="Phan Trần Hùng"
                  born="1320"
                  job="Designer"
                  course="K-391"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CarouselItem = ({ name, born, job, course, ...props }) => {
  return (
    <div className="slide-item">
      <div className="team-wrap">
        <div className="img-block">
          <img src="images/people-02.jpg" alt="images description" />
        </div>
        <div className="text-wrap">
          <h2>{name}</h2>
          <div>
            <p>
              {born}&nbsp;-&nbsp;{course}
            </p>
            <p>{job}</p>
          </div>
          {/* <div>
            <span class="designation bottom-m-space">{job}</span>
          </div> */}

          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default OBOG;
