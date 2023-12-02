import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Navbar } from "../componentsRoute";
import useDarkModeContext from "../context/DarkModeContext";

const RootLayout = () => {
  const { darkMode } = useDarkModeContext();
  console.log(darkMode);
  return (
    <div className={`${darkMode ? "dark root-layout" : ""} relative min-h-screen`}>
      <Navbar />
      <main className="pb-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
