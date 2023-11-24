import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../componentsRoute";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-[5%] py-[5%]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
