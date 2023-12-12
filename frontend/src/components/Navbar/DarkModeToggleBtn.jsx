import React from "react";
import { IoMoonOutline, IoSunny } from "react-icons/io5";
import { useDarkModeContext } from "../../componentsRoute";
const DarkModeToggleBtn = () => {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
    <span
      className="flex items-center gap-2 px-4 py-2 dark:text-neutral-200 text-blue-500 text-base cursor-pointer font-sans dark:hover:bg-neutral-800 hover:bg-blue-100"
      title="Toggle Theme"
      onClick={toggleDarkMode}
      onKeyDown={toggleDarkMode}
    >
      {/* <button
        onClick={toggleDarkMode}
        className={darkMode ? "sun-icon" : "moon-icon"}
        title={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? (
          <img src={sunIcon} alt="" className="w-5" />
        ) : (
          <img src={moonIcon} alt="" className="w-5 mix-blend-multiply" />
        )}
      </button> */}

      <button className="text-xl">
        {darkMode ? <IoMoonOutline /> : <IoSunny />}
      </button>
      <p className="">
        Appearance: {darkMode ? "Dark Theme" : "Light Theme"}
      </p>
    </span>
  );
};

export default DarkModeToggleBtn;
