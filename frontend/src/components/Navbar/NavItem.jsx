import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, pageName, Icon,handleClick }) => {
  return (
    <NavLink to={path} className='nav-item px-4 flex items-center gap-4' onClick={handleClick}>
      <p className="text-2xl">{Icon}</p>
      <p>{pageName}</p>
    </NavLink>
  );
};

export default NavItem;
