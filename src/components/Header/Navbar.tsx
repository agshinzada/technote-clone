import { useState } from "react";
import { NavLink } from "react-router-dom";
import category from "../../assets/data/category.json";

const Navbar = () => {
  const initialState = category;
  const [navs, setNavs] = useState(initialState.slice(0, 7));
  const [lengthStatus, setLengthStatus] = useState(true);

  const handleNav = () => {
    if (lengthStatus) {
      setNavs(initialState);
      setLengthStatus(false);
    } else {
      setNavs([...initialState.slice(0, 7)]);
      setLengthStatus(true);
    }
  };
  return (
    <div className="md:block hidden">
      <div>
        <ul
          className={`flex gap-0.5 dark:text-white flex-wrap ${
            lengthStatus ? "justify-between" : "justify-start"
          }`}
        >
          {navs.map((nav) => (
            <NavLink to={nav.link} key={nav.id} className="px-4 py-[3px] mb-2 ">
              <p
                className={`${
                  nav.link === window.location.pathname
                    ? ""
                    : "hover:border-b hover:border-b-black dark:hover:border-b-white"
                } transition-all duration-200`}
              >
                {nav.name}
              </p>
            </NavLink>
          ))}
          <button
            className="flex gap-1 items-center mb-2"
            type="button"
            onClick={handleNav}
          >
            {lengthStatus ? "Daha çox" : "Daha az"}
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.38434 0.980957C1.55877 0.980957 0.883301 1.65596 0.883301 2.48096C0.883301 3.30596 1.55877 3.98096 2.38434 3.98096C3.20992 3.98096 3.88539 3.30596 3.88539 2.48096C3.88539 1.65596 3.20992 0.980957 2.38434 0.980957ZM12.8916 0.980957C12.0661 0.980957 11.3906 1.65596 11.3906 2.48096C11.3906 3.30596 12.0661 3.98096 12.8916 3.98096C13.7172 3.98096 14.3927 3.30596 14.3927 2.48096C14.3927 1.65596 13.7172 0.980957 12.8916 0.980957ZM7.63799 0.980957C6.81242 0.980957 6.13695 1.65596 6.13695 2.48096C6.13695 3.30596 6.81242 3.98096 7.63799 3.98096C8.46356 3.98096 9.13903 3.30596 9.13903 2.48096C9.13903 1.65596 8.46356 0.980957 7.63799 0.980957Z"
                className="fill-black  dark:fill-white"
              ></path>
            </svg>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
