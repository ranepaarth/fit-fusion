import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputSets = ({emptyFieldClass}) => {
    const {sets,setSets} = useWorkoutContext()
    return (
    <>
      <label className="font-medium text-lg">sets:</label>
      <input
        type="text"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        placeholder="4"
        className={`form-input-field ${emptyFieldClass} ${sets?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputSets;
