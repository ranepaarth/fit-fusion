import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-700 h-20 flex items-center px-[5%] lg:px-[5%]">
      <NavLink to='/'>
        <h1 className="text-4xl font-semibold cursor-pointer">Fit Fusion</h1>
      </NavLink>
    </nav>
  );
};

export default Navbar;
