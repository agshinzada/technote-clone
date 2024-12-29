import { ReactNode } from "react";

const ButtonCustom = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className={`text-sm py-1.5 px-3 border border-black rounded-md dark:border-white dark:hover:text-black flex gap-2 items-center relative hover:bg-[#efefef]`}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
