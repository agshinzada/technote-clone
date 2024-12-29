import LogoBox from "./Header/LogoBox";
import SocialBox from "./SocialBox";
import powered from "../assets/powered.svg";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <div className="flex flex-col items-center px-20 py-10 gap-6 bg-[#F1F5F9] dark:bg-[#171717]">
      <div className="flex flex-col items-center">
        <LogoBox />
        <ul className="flex gap-1 lg:gap-5 lg:flex-row flex-col text-center dark:text-white">
          <li>
            <Link
              to="/istifade-sertleri"
              className="text-xs"
              onClick={scrollToTop}
            >
              İstifadə şərtləri
            </Link>
          </li>
          <li>
            <Link to="/cerezler" className="text-xs" onClick={scrollToTop}>
              Çərəzlər
            </Link>
          </li>
          <li>
            <Link to="/haqqimizda" className="text-xs" onClick={scrollToTop}>
              Haqqımızda
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-xs" onClick={scrollToTop}>
              Əlaqə
            </Link>
          </li>
        </ul>
      </div>

      <SocialBox />
      <div className="flex justify-center items-center flex-col">
        <p className="text-sm dark:text-white">
          © 2015-{new Date().getFullYear()} Technote MMC
        </p>
        <img src={powered} alt="powered" className="w-20" />
      </div>
    </div>
  );
};

export default Footer;
