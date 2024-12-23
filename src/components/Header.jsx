import { useState } from "react";
import "./Header.css";
export const Header = () => {
  const [border, setBorder] = useState("black");
  const handlelight=()=>{
    setBorder("black");
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
    // console.log(theme);
  }
  const handledark=()=>{
    setBorder("white");
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
    // console.log(theme);
  }
  return (
    <header>
      <nav>
        <div className="logo">
          <i className="bi bi-check2-square"></i>
          <span className="title">TaskMate</span>
        </div>
        <div className="theme">
          <span className={`span ${border}`} onClick={handlelight}>
            <i className="bi bi-brightness-low-fill"></i>
            <span>light</span>
          </span>
          <span className="partition">|</span>
          <span className={`span ${border}`} onClick={handledark}>
            <i className="bi bi-moon-stars-fill"></i>
            <span>dark</span>
          </span>
        </div>
      </nav>
    </header>
  );
};
