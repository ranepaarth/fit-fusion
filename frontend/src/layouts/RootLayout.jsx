import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Navbar, useDarkModeContext } from "../componentsRoute";

const RootLayout = () => {
  const { darkMode } = useDarkModeContext();
  const { pathname } = useLocation();
  const page = pathname.split("/").filter((item) => item !== "")[0];
  return (
    <div className={`relative min-h-screen`}>
      <Navbar />
      {page === "signup" || page === "login" ? (
        <main className="flex items-center justify-center py-20 px-10">
          <Outlet />
        </main>
      ) : (
        <main className="pb-14">
          <Outlet />
        </main>
      )}
      <Footer />
    </div>
  );
};

export default RootLayout;
