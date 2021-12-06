import Header from "./Header";
import Footer from "./Footer";
import Admin from "./Admin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../Loading/";
const Layout = ({ children, ...props }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  function asyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 3000));
  }
  const handleLoading = () => {
    document.body.style.overflow = "auto";
    setLoading(false);
    document.body.classList.add('banner-animate')
    const bannerCover = window?.bannerCoverRef.current;
    if (bannerCover) {
      bannerCover.addEventListener("transitionend", () => {
        bannerCover?.parentNode.removeChild(bannerCover);
      });
    }
  };
  useEffect(() => {
    if (router.pathname === "/") {
      document.body.style.overflow = "hidden";
      asyncCall().then(() => handleLoading());
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {router.pathname.includes("/admin") ? (
        <Admin>{children}</Admin>
      ) : (
        <div>
          <Loading loading={loading} />
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
