import { createContext, useContext } from "react";

const WorkoutContext = createContext();

export const WorkoutContextProvider = ({ children }) => {
  return (
    <WorkoutContext.Provider value={"paarth"}>
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};
