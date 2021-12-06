import { useEffect, useRef } from "react";

const Banner = (props) => {
  const bannerCoverRef = useRef()
  useEffect(()=>{
    window.bannerCoverRef = bannerCoverRef
    const bannerCover = bannerCoverRef.current
    if( !bannerCover ) return

    if(document.defaultView?.getComputedStyle(bannerCover).getPropertyValue('z-index')==='auto'){
      document.body.classList.add('banner-animate')
      bannerCover.addEventListener("transitionend", () => {
        bannerCover.parentNode.removeChild(bannerCover)
      });
    }
    
  },[])
  return (
    <>
      {/* <!-- visual/banner of the page --> */}
      <div className="banner banner-home">
        {/* <!-- revolution slider starts --> */}
        <div className="banner-home-container">
          <div className="banner-image-forcefullwidth">
            <img src="/images/big-14.jpg" alt="image banner" />
          </div>
          <div className="banner-content-container">
            <div className="container banner-forcefullheight">
              <div className="row v-align-row banner-inner">
                <div className="col-12 text-white ">
                  <div className="banner-content-pdt">
                    <div className="banner-sub-title">
                      CỰU DHS ĐÔNG DU - MIỀN TRUNG
                    </div>
                    <div className="banner-main-title">OBDD - MIỀN TRUNG</div>
                    <div className="banner-text-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </div>
                    <div className='cover-banner' ref={bannerCoverRef}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/visual/banner of the page --> */}
    </>
  );
};

export default Banner;
