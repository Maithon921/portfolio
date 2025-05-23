import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const store = localStorage.getItem("theme");
    if (store === "dark" || store === "light") return store;
    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return systemPreference ? "dark" : "light";
  };

  const [isDark, setIsDark] = useState(getInitialTheme() === "dark");

  useEffect(() => {
    const mode = isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>useContext(ThemeContext);
