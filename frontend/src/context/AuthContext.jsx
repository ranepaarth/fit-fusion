import { createContext, useContext, useEffect, useReducer } from "react";

const authContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

const userState = {
  user: null,
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, userState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(user) {
      dispatch({type:"SIGNUP",payload:user})
    }
  }, []);

  console.log("AuthContext state: ", state);

  const loginUser = (user) => {
    return dispatch({ type: "SIGNUP", payload: user });
  };

  const logoutUser = () => {
    return dispatch({ type: "LOGOUT" });
  };

  return (
    <authContext.Provider value={{ ...state, loginUser, logoutUser }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context)
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  return context;
};

export default AuthContextProvider;
