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
        placeholder="20"
        className={`form-input-field ${emptyFieldClass} ${reps?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputReps;
