import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputSets = ({emptyFieldClass}) => {
    const {sets,setSets} = useWorkoutContext()
    return (
    <div className="form-single-field">
      <label className="form-label">sets:</label>
      <input
        type="text"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        placeholder="4"
        className={`form-input-field ${emptyFieldClass} ${sets?"outline-none ":""}`}
      />
    </div>
  );
};

export default FormInputSets;
