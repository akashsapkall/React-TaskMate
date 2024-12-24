import { useEffect, useState } from "react";
import "./Header.css";
export const Header = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    theme
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [theme]);
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <i className="bi bi-check2-square"></i>
          <span className="title">TaskMate</span>
        </div>
        <div className="theme-div" onClick={handleTheme}>
          <div className="light">
            <span>
              <i className="bi bi-brightness-low-fill"></i>
              <span>light</span>
            </span>
          </div>
          <div className="dark">
            <span>
              <i className="bi bi-moon-stars-fill"></i>
              <span>dark</span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
