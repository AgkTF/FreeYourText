import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext({
  theme: "light",
  toggler: () => {},
});

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme === "light") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", theme);
    }
  });

  return (
    <ThemeContext.Provider value={{ theme: theme, toggler: themeToggler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
