import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputReps = () => {
  const { reps, setReps } = useWorkoutContext();
  return (
    <>
      <label className="font-medium text-lg">repetitions:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />
    </>
  );
};

export default FormInputReps;
