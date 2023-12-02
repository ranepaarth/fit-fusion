import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputLoads = ({emptyFieldClass}) => {
  const { load, setLoad } = useWorkoutContext();
  return (
    <div className="form-single-field">
      <label className="form-label">load (in kg):</label>
      <input
        type="text"
        value={load}
        placeholder="40"
        onChange={(e) => setLoad(e.target.value)}
        className={`form-input-field ${emptyFieldClass} ${load?"outline-none":""}`}
      />
    </div>
  );
};

export default FormInputLoads;
