import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputReps = ({emptyFieldClass}) => {
  const { reps, setReps } = useWorkoutContext();
  return (
    <div className="form-single-field">
      <label className="form-label">repetitions:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="20"
        className={`form-input-field ${emptyFieldClass} ${reps?"border-none ":""}`}
      />
    </div>
  );
};

export default FormInputReps;
