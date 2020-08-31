import React from "react";
const ThemeToggler = ({ toggler, theme }) => {
  return (
    <button
      onClick={toggler}
      className={
        "w-16 px-1 flex justify-between border-2 border-gray-400 rounded-full overflow-hidden focus:outline-none focus:shadow-outline" +
        (theme === "light" ? " bg-gray-200" : " bg-gray-900")
      }
    >
      <span
        role="img"
        aria-label="sun"
        className={"text-xl transition-all duration-500 ease-in-out"}
        style={
          theme === "light"
            ? { transform: "translateX(12px)" }
            : { transform: "translateY(-50px)" }
        }
      >
        ☀️
      </span>
      <span
        role="img"
        aria-label="moon"
        className={"text-xl transition-all duration-500 ease-in-out"}
        style={
          theme === "light"
            ? { transform: "translateY(50px)" }
            : { transform: "translate(-12px,0)" }
        }
      >
        🌙
      </span>
    </button>
  );
};

export default ThemeToggler;
