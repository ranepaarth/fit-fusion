import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormInputLoads,
  FormInputReps,
  FormInputSets,
  FormInputTitle,
  FormWorkoutError,
  useWorkoutContext,
} from "../../componentsRoute";
import { useAuthContext } from "../../context/AuthContext";

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
    isUpdating,
    selectedWorkout,
    updateWorkout,
  } = useWorkoutContext();

  const { user } = useAuthContext();

  // console.log(title);

  const showToastMessage = () => {
    toast.success(isUpdating ? "Workout Updated !" : `Workout Created !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps, sets };
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/workout`,
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          Authorization: `Bearer ${user?.jwtToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    //if the above request is successful we get json data as a response from the backend server as specified by us
    const data = await response.json();
    if (!user) {
      setError("You must be logged in");
      resetStates();
      return;
    }
    //Same happens for an error response
    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    } else if (response.ok) {
      resetStates();
      showToastMessage();
      fetchCreatedWorkout(data);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // console.log('inside handleUpdate')
    if (!user) {
      setError("You must be logged in");
      resetStates();
      return;
    }

    const workout = { title, reps, sets, load };
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/workout/${selectedWorkout._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.jwtToken}`,
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
      console.log('response not ok')
      console.log(error)
    } else if (response.ok) {
      // console.log(workout);
      console.log('response ok')
      resetStates();
      showToastMessage();
      updateWorkout(
        workout,
        selectedWorkout.createdAt,
        selectedWorkout.updatedAt,
        selectedWorkout._id
      );
      // console.log(isUpdating)
      // console.log('outside handleUpdate')
      // fetchCreatedWorkout(data);
    }
  };

  const isEmptyField = (detail) => {
    return emptyFields?.includes(detail);
  };

  return (
    <form
      className="w-full md:w-[40%] flex flex-col gap-y-5 capitalize mb-8"
      onSubmit={isUpdating ? handleUpdate : handleSubmit}
    >
      <h1 className="text-center text-2xl text-blue-500">
        Create A New Workout
      </h1>

      <FormInputTitle
        emptyFieldClass={
          isEmptyField("title") ? "empty-form-field" : "outline-none"
        }
      />
      <FormInputLoads
        emptyFieldClass={isEmptyField("loads") ? "empty-form-field" : ""}
      />
      <FormInputSets
        emptyFieldClass={isEmptyField("sets") ? "empty-form-field" : ""}
      />
      <FormInputReps
        emptyFieldClass={isEmptyField("reps") ? "empty-form-field" : ""}
      />

      <div className="flex justify-center mt-5">
        <button
          className="form-submit-btn dark:disabled:bg-opacity-50 disabled:text-neutral-300 disabled:bg-opacity-90"
          disabled={!user}
        >
          {isUpdating ? "Update Workout" : "Add Workout"}
        </button>
        <ToastContainer />
      </div>

      <FormWorkoutError />
    </form>
  );
};

export default WorkoutsForm;
