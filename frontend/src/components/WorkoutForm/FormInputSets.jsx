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
        className={`outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg capitalize focus-within: outline-2 focus-within:outline-blue-600 focus-within:border-none ${emptyFieldClass} ${sets?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputSets;
