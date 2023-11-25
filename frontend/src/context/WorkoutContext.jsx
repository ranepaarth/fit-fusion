import { createContext, useContext, useReducer, useState } from "react";

const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id != action.payload
        ),
      };
    default:
      return state;
  }
};

const initialWorkout = {
  workouts: null,
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialWorkout);
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [load, setLoad] = useState("");
  const [emptyFields,setEmptyFields] = useState([]);
  const [error, setError] = useState(null);

  const fetchAllWorkouts = (workouts) => {
    return dispatch({ type: "SET_WORKOUTS", payload: workouts });
  };

  const fetchCreatedWorkout = (workout) => {
    return dispatch({ type: "CREATE_WORKOUT", payload: workout });
  };

  const deleteSingleWorkout = (workoutId) => {
    console.log(workoutId);
    return dispatch({ type: "DELETE_WORKOUT", payload: workoutId });
  };

  const resetStates = () => {
    setError(null);
    setTitle("");
    setLoad("");
    setSets("");
    setReps("");
    setEmptyFields([])
  };

  return (
    <WorkoutContext.Provider
      value={{
        ...state,
        fetchAllWorkouts,
        fetchCreatedWorkout,
        deleteSingleWorkout,
        title,
        setTitle,
        reps,
        setReps,
        sets,
        setSets,
        load,
        setLoad,
        error,
        setError,
        resetStates,
        setEmptyFields,
        emptyFields
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

const useWorkoutContext = () => {
  return useContext(WorkoutContext);
};

export default useWorkoutContext
