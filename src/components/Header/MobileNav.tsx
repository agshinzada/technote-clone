import { MdOutlineDarkMode } from "react-icons/md";
import LogoBox from "./LogoBox";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import category from "../../assets/data/category.json";

const MobileNav = () => {
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
    <div className="bg-white dark:bg-black z-10 absolute w-full h-screen">
      <div className="flex justify-between">
        <LogoBox />
        <div className="flex gap-4 items-center ">
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
          <div>
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 17L19 2M2 2L19 17"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="fill-black stroke-black dark:fill-white dark:stroke-white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* search */}

      <div className="relative w-full mt-9">
        <input
          id="search"
          type="text"
          name="name"
          className="bg-white border border-black dark:bg-black dark:border-white rounded-lg w-full h-[40px] px-3 py-1 focus:outline-none text-sm"
          placeholder="Axtar"
          // onChange={(e) => setSearchValue(e.target.value)}
          // onKeyDown={handleSearch}
          required
        />
        <div className="w-5 absolute right-2 top-[10px] ">
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
      {/* navs */}
      <div>
        <ul className="flex flex-col text-xl gap-3 text-slate-600 mt-7">
          {category.map((nav) => (
            <Link to={nav.link} key={nav.id}>
              <p
                className={`hover:border-b hover:border-b-black dark:hover:border-b-white transition-all duration-200`}
              >
                {nav.name.toLocaleUpperCase("az")}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
