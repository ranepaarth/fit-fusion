import React from "react";
import { FormInputLoads, FormInputReps, FormInputSets, FormInputTitle, FormWorkoutError, useWorkoutContext } from "../../componentsRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WorkoutsForm = () => {
  const {
    title,
    reps,
    sets,
    load,
    setError,
    resetStates,
    setEmptyFields,
    emptyFields,
    fetchCreatedWorkout,
  } = useWorkoutContext();

  const showToastMessage = () => {
    toast.success(`Workout Created !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose:3000,
      theme: 'colored'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps, sets };
    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //if the above request is successful we get json data as a response from the backend server as specified by us
    const data = await response.json();

    //Same happens for an error response
    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields)
      console.log(response);
    } else if (response.ok) {
      resetStates();
      showToastMessage()
      fetchCreatedWorkout(data);
    }
  };

  const isEmptyField = (detail) => {
    console.log(detail)
    return emptyFields.includes(detail)
  }

  return (
    <form
      className="w-full md:w-[40%] flex flex-col gap-y-2 capitalize sticky"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl text-neutral-50">
        Create A New Workout
      </h1>

      <FormInputTitle emptyFieldClass={isEmptyField('title')?"border-2 border-red-500":'border-none'}/>
      <FormInputLoads emptyFieldClass={isEmptyField('loads')?"border-2 border-red-500":'border-none'}/>
      <FormInputSets emptyFieldClass={isEmptyField('sets')?"border-2 border-red-500":'border-none'}/>
      <FormInputReps emptyFieldClass={isEmptyField('reps')?"border-2 border-red-500":'border-none'}/>

      <div className="flex justify-center mt-5">
        <button className="p-3 w-fit bg-blue-500 rounded hover:bg-opacity-80">
          Add Workout
        </button>
        <ToastContainer />
      </div>

      <FormWorkoutError />
    </form>
  );
};

export default WorkoutsForm;
