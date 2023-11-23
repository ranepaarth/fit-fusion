import moment from "moment";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import WorkoutDetail from "../components/WorkoutCard/WorkoutDetail";
import WorkoutTitle from "../components/WorkoutCard/WorkoutTitle";

const WorkoutCard = ({ workout }) => {
  return (
    <article className="bg-neutral-100 w-full md:w-[80%] py-2 px-4 rounded-md relative">
      <WorkoutTitle title={workout?.title} />
      <span className="bg-red-200 absolute right-4 top-3 p-1 rounded-full border-red-500 border-2 hover:scale-105 cursor-pointer" title="Delete">
        <MdDeleteForever className="text-red-600"/>
      </span>
      <div className="flex md:flex-col md:items-start items-center justify-between text-neutral-600 mt-5">
        <WorkoutDetail name={"Load (kg):"} value={workout?.load} />
        <WorkoutDetail name={"repetitions:"} value={workout?.reps} />
        <WorkoutDetail name={"sets:"} value={workout?.sets} />
      </div>
      <p className="text-neutral-400 text-base font-normal">
        {moment(workout?.createdAt).format("YYYY-MM-DD HH:mm")}
      </p>
    </article>
  );
};

export default WorkoutCard;