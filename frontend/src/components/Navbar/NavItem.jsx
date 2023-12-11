import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ path, pageName, Icon,handleClick }) => {
  return (
    <Link to={path} className='nav-item px-4 flex items-center gap-4 mt-2' onClick={handleClick}>
      <p className="text-2xl">{Icon}</p>
      <p>{pageName}</p>
    </Link>
  );
};

export default NavItem;
