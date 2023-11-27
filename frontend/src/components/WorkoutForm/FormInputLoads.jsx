import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputLoads = ({emptyFieldClass}) => {
  const { load, setLoad } = useWorkoutContext();
  return (
    <>
      <label className="font-medium text-lg">load (in kg):</label>
      <input
        type="text"
        value={load}
        placeholder="40"
        onChange={(e) => setLoad(e.target.value)}
        className={`form-input-field ${emptyFieldClass} ${load?"border-none":""}`}
      />
    </>
  );
};

export default FormInputLoads;
