import React from "react";
import { MdDeleteForever } from "react-icons/md";
import {FaRegEdit} from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WorkoutDetail,
  WorkoutTitle,
  useWorkoutContext,
} from "../../componentsRoute";
import WorkoutCreatedAt from "./WorkoutCreatedAt";

const WorkoutCard = ({ workout }) => {
  const { deleteSingleWorkout,setTitle,setSets,setLoad,setReps,setIsUpdating,setSelectedWorkout } = useWorkoutContext();
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
  setSelectedWorkout(workout)
  setTitle(workout.title)
  setLoad(workout.load)
  setReps(workout.reps)
  setSets(workout.sets)
  setIsUpdating(true)
}

  return (
    <article className="bg-neutral-100 w-full py-2 px-4 rounded-md ">
      <ToastContainer />
      <header className="flex items-center justify-between">
        <WorkoutTitle title={workout?.title} />
        <span className="flex gap-x-3">
          <p className="bg-blue-200 p-1 rounded-full border-blue-500 border-2 hover:scale-105 cursor-pointer" onClick={()=>handleUpdate()} onKeyDown={()=>handleUpdate()}>
            <FaRegEdit className="text-blue-500"/>
          </p>
          <p
            className="bg-red-200 p-1 rounded-full border-red-500 border-2 hover:scale-105 cursor-pointer"
            title="Delete"
            onClick={() => deleteWorkout(workout._id)} onKeyDown={()=>deleteWorkout(workout._id)}
          >
            <MdDeleteForever
              className="text-red-600"
            />
          </p>
        </span>
      </header>
      <div className="flex md:flex-col xl:flex-row md:items-start items-center justify-between text-neutral-600 mt-5">
        <WorkoutDetail name={"Load (kg):"} value={workout?.load} />
        <WorkoutDetail name={"repetitions:"} value={workout?.reps} />
        <WorkoutDetail name={"sets:"} value={workout?.sets} />
      </div>
      {/* <p className="text-neutral-400 text-base font-normal">
        {moment(workout?.createdAt).format("DD-MM-YYYY HH:mm")}
      </p> */}
      <WorkoutCreatedAt createdAt={workout?.createdAt} />
    </article>
  );
};

export default WorkoutCard;
