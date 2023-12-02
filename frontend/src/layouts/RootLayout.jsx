import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../componentsRoute";
import useDarkModeContext from "../context/DarkModeContext";
import Footer from "../components/Footer";

const RootLayout = () => {
  const {darkMode} = useDarkModeContext()
  console.log(darkMode)
  return (
    <div className={`${darkMode?"dark root-layout":""} min-h-full`}>
      <Navbar />
      <main className="px-[5%] py-[5%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
