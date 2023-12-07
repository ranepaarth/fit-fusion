import React from 'react'
import { moonIcon, sunIcon, useDarkModeContext } from '../../componentsRoute';

const DarkModeToggleBtn = () => {
    const { darkMode, toggleDarkMode } = useDarkModeContext();
  return (
 <button
        onClick={toggleDarkMode}
        className={darkMode ? "sun-icon" : "moon-icon"}
        title={darkMode ? "Light Mode" : "Dark Mode"}
      >
        {darkMode ? (
          <img src={sunIcon} alt="" className="w-5"/>
        ) : (
          <img src={moonIcon} alt="" className="w-5 mix-blend-multiply"/>
        )}
      </button>
  )
}

export default DarkModeToggleBtn