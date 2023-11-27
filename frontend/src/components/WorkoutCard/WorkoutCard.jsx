import React from "react";
import { MdDeleteForever, MdEditOff, MdModeEditOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WorkoutDetail,
  WorkoutTitle,
  useWorkoutContext,
} from "../../componentsRoute";
import WorkoutCreatedAt from "./WorkoutCreatedAt";

const WorkoutCard = ({ workout }) => {
  const {
    deleteSingleWorkout,
    setTitle,
    setSets,
    setLoad,
    setReps,
    setIsUpdating,
    setSelectedWorkout,
    title,
    isUpdating,
    resetStates,
  } = useWorkoutContext();
  const showToastMessage = () => {
    toast.error(`Workout Deleted !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  };
  const deleteWorkout = async (id) => {
    const response = await fetch("/api/workout/" + workout?._id, {
      method: "DELETE",
    });

    if (response.ok) {
      showToastMessage();
      deleteSingleWorkout(id);
    }
  };

  const handleUpdate = () => {
    setSelectedWorkout(workout);
    setTitle(workout.title);
    setLoad(workout.load);
    setReps(workout.reps);
    setSets(workout.sets);
    setIsUpdating(true);
  };

  const cancelUpdate = () => {
    resetStates();
  };
  return (
    <article
      className={`bg-neutral-100 w-full py-2 px-4 rounded-md ${
        isUpdating && title === workout?.title
          ? "border-4 border-blue-500 shadow-sm"
          : "border-4 border-transparent"
      }`}
    >
      <ToastContainer />
      <header className="flex items-center justify-between">
        <WorkoutTitle title={workout?.title} />
        <span className="flex gap-x-3">
          {setIsUpdating && title === workout?.title ? (
            <p
              className="edit-btn"
              onClick={cancelUpdate}
              onKeyDown={cancelUpdate}
              title="Cancel Update"
            >
              <MdEditOff/>
            </p>
          ) : (
            <p
              className="edit-btn"
              onClick={handleUpdate}
              onKeyDown={handleUpdate}
              title="Edit"
            >
              <MdModeEditOutline/>
            </p>
          )}
          <p
            className="delete-btn"
            title="Delete"
            onClick={() => deleteWorkout(workout._id)}
            onKeyDown={() => deleteWorkout(workout._id)}
          >
            <MdDeleteForever/>
          </p>
        </span>
      </header>
      <div className="flex md:flex-col xl:flex-row md:items-start items-center justify-between text-neutral-600 mt-5">
        <WorkoutDetail name={"Load (kg):"} value={workout?.load} />
        <WorkoutDetail name={"repetitions:"} value={workout?.reps} />
        <WorkoutDetail name={"sets:"} value={workout?.sets} />
      </div>
      <WorkoutCreatedAt
        createdAt={workout?.createdAt}
        updatedAt={workout?.updatedAt}
      />
    </article>
  );
};

export default WorkoutCard;
