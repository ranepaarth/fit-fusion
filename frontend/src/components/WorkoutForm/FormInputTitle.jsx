import React, { useEffect, useRef } from "react";
import { useWorkoutContext } from "../../componentsRoute";

const FormInputTitle = ({emptyFieldClass}) => {
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
        placeholder="Bench Press"
        ref={titleRef}
        className={`form-input-field  ${emptyFieldClass} ${title?"border-none ":""}`}
      />
    </>
  );
};

export default FormInputTitle;
