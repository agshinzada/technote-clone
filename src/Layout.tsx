import { ReactNode, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [themeChecked, setThemeChecked] = useState(false);
  return (
    <div className="flex grow flex-col  bg-white dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <div className="flex flex-col grow 3xl:px-42 px-6 md:px-10 lg:px-12 xl:px-20 2xl:px-36 4xl:px-72 5xl:px-96 6xl:mx-52">
        <Header
          isOpen={menuIsOpen}
          setIsOpen={setMenuIsOpen}
          themeChecked={themeChecked}
          setThemeChecked={setThemeChecked}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
