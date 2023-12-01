import React from "react";
import { NavLink } from "react-router-dom";
import sunIcon from "../assets/sun-svgrepo-com.svg";
import { Logo } from "../componentsRoute.js";
import useDarkModeContext from "../context/DarkModeContext.jsx";

import moonIcon from "../assets/moon-svgrepo-com.svg";
const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <nav className="navbar-style flex items-center justify-between">
      <NavLink to="/" className="flex items-center gap-2">
        <Logo />
        <h1 className="logo-name">Fit Fusion</h1>
      </NavLink>

      <button
        onClick={toggleDarkMode}
        className={darkMode ? "sun-icon" : "moon-icon"}
        title={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? (
          <img src={sunIcon} alt="" className="w-5"/>
        ) : (
          <img src={moonIcon} alt="" className="w-5 mix-blend-multiply"/>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
