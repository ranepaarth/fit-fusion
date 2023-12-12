import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoBarbell } from "react-icons/io5";
import { LuLogIn, LuLogOut, LuUserPlus2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { DarkModeToggleBtn, Logo, NavItem } from "../../componentsRoute.js";
import { useAuthContext } from "../../context/AuthContext.jsx";
import { useLogout } from "../../hooks/useLogout.js";
const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const toggleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="navbar-style flex items-center justify-between relative">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <h1 className="logo-name">Fit Fusion</h1>
      </Link>

      <span className="flex items-center gap-3 transition-all duration-200">
        {user ? (
          <img
            src={`https://api.multiavatar.com/${user?.firstName}.png`}
            className="w-12 cursor-pointer border-2 border-transparent rounded-full focus:border-4 hover:border-blue-400"
            alt={<FaUser />}
            onClick={toggleShowOptions}
            onKeyDown={toggleShowOptions}
          />
        ) : (
          <span
            className="bg-blue-200 p-2 text-blue-600 text-2xl rounded-full border-2 dark:hover:border-blue-500 border-blue-600 cursor-pointer"
            onClick={toggleShowOptions}
            onKeyDown={toggleShowOptions}
          >
            <FaUser />
          </span>
        )}

        {showOptions ? (
          <div
            className="option-container fixed top-0 right-0 left-0 w-full h-full bg-black/10"
            onClick={toggleShowOptions}
            onKeyDown={toggleShowOptions}
          >
            <div className="options absolute top-5 right-24 md:right-24 lg:right-28 xl:right-32 flex flex-col dark:bg-neutral-600 dark:border-px dark:border-neutral-300 shadow-black shadow-sm bg-white rounded-md z-30 py-2 transition-all duration-300">
              {user && (
                <span className="dark:text-neutral-100 flex items-start gap-x-2 px-4 py-2">
                  {user ? (
                    <img
                      src={`https://api.multiavatar.com/${user?.firstName}.png`}
                      className="w-12 cursor-pointer"
                      alt={<FaUser />}
                    />
                  ) : (
                    <p className="bg-blue-200 text-blue-600 text-2xl rounded-full border-2 p-2 dark:hover:border-blue-500 border-blue-600 cursor-pointer">
                      <FaUser />
                    </p>
                  )}
                  <span className="flex flex-col gap-0">
                    <p className="text-lg font-medium capitalize text-blue-600 dark:text-neutral-200">
                      {user?.firstName}
                    </p>
                    <p className="text-blue-500">{user?.userName}</p>
                  </span>
                </span>
              )}
              {user && (
                <hr className="border-t border-blue-300 dark:border-neutral-400 mb-2" />
              )}
              {user ? (
              <>
                <NavItem
                  path={"/"}
                  pageName={"My Workouts"}
                  Icon={<IoBarbell />}
                />
                <hr className="border-t border-blue-300 dark:border-neutral-400 my-2" />
                  <NavItem
                    path={'/login'}
                    pageName={"Log Out"}
                    Icon={<LuLogOut />}
                    handleClick={handleLogout}
                  />
              </>
              ) : (
                <>
                  <NavItem
                    path={"signup"}
                    pageName={"Sign Up"}
                    Icon={<LuUserPlus2 />}
                  />
                  <NavItem
                    path={user ? "/" : "login"}
                    pageName={"Log In"}
                    Icon={<LuLogIn />}
                  />
                </>
              )}
              <hr className="border-t border-blue-300 dark:border-neutral-400 my-2" />
              <DarkModeToggleBtn />
            </div>
          </div>
        ) : (
          ""
        )}
      </span>
    </nav>
  );
};

export default Navbar;
