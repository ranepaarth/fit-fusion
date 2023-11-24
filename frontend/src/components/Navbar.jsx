import React from "react";
import { NavLink } from "react-router-dom";
import {Logo} from '../componentsRoute.js'
const Navbar = () => {
  return (
    <nav className="bg-neutral-700 h-20 flex items-center px-[5%] lg:px-[5%]">
      <NavLink to='/' className='flex items-center gap-2'>
        <Logo />
        <h1 className="text-4xl font-bold cursor-pointer hidden md:block">Fit Fusion</h1>
      </NavLink>
    </nav>
  );
};

export default Navbar;
