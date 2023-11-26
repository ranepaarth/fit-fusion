import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputReps = ({emptyFieldClass}) => {
  const { reps, setReps } = useWorkoutContext();
  return (
    <>
      <label className="font-medium text-lg">repetitions:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={`outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg capitalize focus-within: outline-2 focus-within:outline-blue-600 focus-within:border-none ${emptyFieldClass} ${reps?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputReps;
