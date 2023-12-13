import React from "react";
import { MdDeleteForever, MdEditOff, MdModeEditOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WorkoutCreatedAt,
  WorkoutDetail,
  WorkoutTitle,
  useWorkoutContext,
} from "../../componentsRoute";
import { useAuthContext } from "../../context/AuthContext";

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

  const { user } = useAuthContext();
  const showToastMessage = () => {
    toast.error(`Workout Deleted !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      theme: "colored",
    });
  };
  const deleteWorkout = async (id) => {
    if (!user) return;
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/workout/${workout?._id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user?.jwtToken}`,
        },
      }
    );

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
      className={`workout-card-body ${
        isUpdating && title === workout?.title
          ? "border-4 border-blue-500 shadow-sm"
          : "border-4 border-transparent"
      }`}
    >
      <ToastContainer />
      <header
        className="flex items-center justify-between gap-x-2 line-clamp-2"
        title={workout?.title}
      >
        <WorkoutTitle title={workout?.title} />
        <span className="flex gap-x-3 bg-neutral- p-1">
          {setIsUpdating && title === workout?.title ? (
            <p
              className="edit-btn"
              onClick={cancelUpdate}
              onKeyDown={cancelUpdate}
              title="Cancel Update"
            >
              <MdEditOff />
            </p>
          ) : (
            <p
              className="edit-btn"
              onClick={handleUpdate}
              onKeyDown={handleUpdate}
              title="Edit"
            >
              <MdModeEditOutline />
            </p>
          )}
          <p
            className="delete-btn"
            title="Delete"
            onClick={() => deleteWorkout(workout._id)}
            onKeyDown={() => deleteWorkout(workout._id)}
          >
            <MdDeleteForever />
          </p>
        </span>
      </header>
      <div className="workout-card-footer">
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
