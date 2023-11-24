import React, { useEffect, useRef } from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputTitle = () => {
  const { title, setTitle } = useWorkoutContext();
  const titleRef = useRef();
  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <>
      <label className="font-medium text-lg ">exercise title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg capitalize focus-within: outline-2 focus-within:outline-blue-600"
      />
    </>
  );
};

export default FormInputTitle;
