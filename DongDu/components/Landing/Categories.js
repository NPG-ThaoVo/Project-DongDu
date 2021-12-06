import { useEffect, useState } from "react";

const listData = [
  {
    catetories: "it ",
    image: "/images/img-35.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "it news",
    image: "/images/img-36.jpg",
    title: "Tự hào miền Nam",
    url: "",
  },
  {
    catetories: "news",
    image: undefined,
    title: "Tự hào miền Băc",
    url: "",
  },
  {
    catetories: "news",
    image: "/images/img-37.jpg",
    title: "Tự hào miền Tây",
    url: "",
  },
  {
    catetories: "it",
    image: "/images/img-38.jpg",
    title: "Tự hào miền Cát trắng",
    url: "",
  },
  {
    catetories: "it news",
    image: undefined,
    title: "Tự hào miền Đông",
    url: "",
  },
  {
    catetories: "it news",
    image: undefined,
    title: "Tự hào miền Ký ức",
    url: "",
  },
  {
    catetories: "it",
    image: "/images/img-39.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "news",
    image: "/images/img-34.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "it news",
    image: "/images/img-36.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "news",
    image: undefined,
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "it",
    image: "/images/img-39.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
  {
    catetories: "it news",
    image: "/images/img-38.jpg",
    title: "Tự hào miền Trung",
    url: "",
  },
];

const Categories = (props) => {
  const [itemLength, setItemLength] = useState(6);

  useEffect(() => {
    let $grid;
    window.addEventListener("load", (e) => {
      // init isotope
      $grid = $(".grid").isotope({
        itemSelector: ".gallery-item",
        layoutMode: "packery",
      });

      // Filter functions
      let filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function (i, elem) {
          let number = $(elem).find(".number").text();
          return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function (i, elem) {
          let name = $(elem).find(".name").text();
          return name.match(/ium$/);
        },
      };

      // Bind filter button click
      $(".filter-button-group").on("click", "button", function () {
        let filterValue = $(this).attr("data-filter");
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
      });
      // Change is-checked class on buttons
      $(".button-group").each(function (i, buttonGroup) {
        let $buttonGroup = $(buttonGroup);
        $buttonGroup.on("click", "button", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
    });

    return () => {
      !!$grid && $grid.isotope("destroy");
    };
  }, [itemLength]);

  // useEffect(() => {
  //   setItemLength(itemLength + 3);
  // }, [itemLength]);

  const loadMore = (e) => {
    setItemLength(itemLength + 3);
  };

  return (
    <>
      <section className="content-block portfolio-block" id="container">
        <div className="bottom-space text-center text-uppercase">
          <h2>CHUYÊN MỤC</h2>
        </div>
        <ul className="filter-nav text-center button-group filter-button-group">
          <li>
            <button data-filter="*" className="is-checked">
              Tất cả
            </button>
          </li>
          <li>
            <button data-filter=".it">Ngành IT</button>
          </li>
          <li>
            <button data-filter=".news">Tin tức</button>
          </li>
        </ul>
        <div className="row grid">
          {listData.slice(0, itemLength).map((item, key) => {
            return (
              <GalleryItem
                catetories={item.catetories}
                title={item.title}
                image={item.image}
                url={item.url}
                key={key}
              />
            );
          })}
        </div>
        <div className="container center-text">
          <div className="btn-container" onClick={loadMore}>
            <a className="btn btn-sm btn-light">Load more</a>
          </div>
        </div>
      </section>
    </>
  );
};

const GalleryItem = ({ image, title, catetories = "", url = "", ...props }) => {
  return (
    <div className={`gallery-item col-lg-4 col-md-6 ${catetories}`}>
      <div className="gallery-item-p-rel">
        <div className="gallery-item-ratio"></div>
        <div className="gallery-item-fill-full gallery-item-tl gallery-item-p-abs">
          <figure className="picture-item img-block full-height shine-effect image-zoom port-v2">
            <div className="gallery-item-fill-full overflow-none">
              {!!image && <img src={image} alt={title} />}

              {!image && (
                <img
                  src={`/images/category-image-default-${Math.round(
                    Math.random() * 10
                  )}.jpg`}
                  alt="default image"
                />
              )}
            </div>
            <figcaption>
              <div className="link-box">
                <h3 className="container">{title}</h3>
                {/* <a href="#">
                    <span className="icon-heart">
                      <span className="sr-only">&amp;</span>
                    </span>
                  </a> */}
                <a href="#">
                  <span className="icon-link">
                    <span className="sr-only">&amp;</span>
                  </span>
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Categories;
