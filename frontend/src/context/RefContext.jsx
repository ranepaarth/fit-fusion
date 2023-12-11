import { createContext, useContext, useRef } from "react";

const RefContext = createContext();

const RefContextProvider = ({ children }) => {
  const ref = useRef();
  return <RefContext.Provider value={ref}>{children}</RefContext.Provider>;
};

export const useRefContext = () => {
  const context = useContext(RefContext);

  if (!context)
    throw Error("useRefContext must be used within RefContextProvider");

  return context;
};

export default RefContextProvider;
