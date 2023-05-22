import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header gradient__bg ">
      <span onClick={() => window.scroll(0, 0)}>
        🎦 <span className="gradient__text">SKMovies</span>
      </span>
    </div>
  );
};

export default Header;
