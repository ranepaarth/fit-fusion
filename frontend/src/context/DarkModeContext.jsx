import { createContext, useContext, useEffect, useReducer } from "react";

const DarkModeContext = createContext();

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};

const getDarkMode = () =>{
  return localStorage.getItem("darkMode");
}
console.log(getDarkMode() )
const darkModeState = {
  darkMode: getDarkMode(),
};

console.log(darkModeState.darkMode)
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, darkModeState);

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', state.darkMode)
    return dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <DarkModeContext.Provider value={{ ...state, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};

export default useDarkModeContext;
