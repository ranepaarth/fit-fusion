import React from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputLoads = () => {
  const { load, setLoad } = useWorkoutContext();

  return (
    <>
      <label className="font-medium text-lg">load (in kg):</label>
      <input
        type="text"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />
    </>
  );
};

export default FormInputLoads;
