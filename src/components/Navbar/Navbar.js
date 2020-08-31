import React, { useContext } from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { ThemeContext } from "../../context/theme-context";

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="py-1 h-auto bg-indigo-500">
      <div className="px-4 sm:px-0 flex items-center justify-between max-w-sm md:max-w-md mx-auto">
        <a
          href="#"
          className="font-semibold text-white text-lg hover:text-indigo-100"
        >
          FreeYourText
        </a>

        <ThemeToggler
          toggler={themeContext.toggler}
          theme={themeContext.theme}
        />
      </div>
    </div>
  );
};

export default Navbar;
