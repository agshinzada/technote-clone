import { MdOutlineDarkMode } from "react-icons/md";
import LogoBox from "./LogoBox";
import SocialBox from "../SocialBox";
import { IoSunnyOutline } from "react-icons/io5";
import Navbar from "./Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  function handleSearch(params: React.KeyboardEvent<HTMLInputElement>) {
    if (params.key === "Enter") {
      if (searchValue.trim() !== "") {
        navigate(`/axtar?contains=${searchValue}`);
      }
    }
  }

  const handleThemeChange = () => {
    const html = document.querySelector("html");
    if (html?.classList.contains("light")) {
      html.classList.remove("light");
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
      html?.classList.add("light");
    }
  };
  return (
    <div className="mb-3 mt-6 flex flex-col gap-7 relative">
      <div className="flex items-center justify-between">
        <SocialBox />
        <LogoBox />
        <div className="flex items-center gap-3">
          <label className="inline-flex items-center cursor-pointer relative ">
            <input
              type="checkbox"
              value=""
              className="sr-only peer "
              onChange={handleThemeChange}
            />
            <div className="after:z-10 relative w-11 h-6  bg-black peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] dark:after:bg-black after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white "></div>
            <MdOutlineDarkMode className="absolute text-white right-1 text-sm z-0" />
            <IoSunnyOutline className="absolute left-1 text-sm text-black z-0" />
          </label>
          <div className="relative md:block hidden">
            <input
              type="search"
              name="search"
              className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-[120px] h-[24px] px-3 py-1 focus:outline-none text-xs"
              placeholder="Axtar"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleSearch}
            />
            <div className="w-5 absolute right-1 top-[4px]">
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="dark:stroke-white"
                />
              </svg>
            </div>
          </div>
          {/* Mobile nav */}
          <div>
            <svg
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden hover:cursor-pointer"
            >
              <path
                d="M1.625 1.25H23.375M1.625 8.5H23.375M1.625 15.75H23.375"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="fill-black stroke-black dark:fill-white dark:stroke-white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <Navbar />
      <MobileNav />
    </div>
  );
};

export default Header;
