import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputSets = () => {
    const {sets,setSets} = useWorkoutContext()
  return (
    <>
      <label className="font-medium text-lg">sets:</label>
      <input
        type="text"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />
    </>
  );
};

export default FormInputSets;
