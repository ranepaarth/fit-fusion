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
        onChange={(e) => setLoad(e.target.value)}
        className={`outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg capitalize focus-within: outline-2 focus-within:outline-blue-600 focus-within:border-none ${emptyFieldClass} ${load?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputLoads;
