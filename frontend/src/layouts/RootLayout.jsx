import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-[5%] lg:px-[10%] py-[5%]">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
