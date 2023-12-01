import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../componentsRoute";
import useDarkModeContext from "../context/DarkModeContext";

const RootLayout = () => {
  const {darkMode} = useDarkModeContext()
  console.log(darkMode)
  return (
    <div className={`${darkMode?"dark root-layout":""}`}>
      <Navbar />
      <main className="px-[5%] py-[5%]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
