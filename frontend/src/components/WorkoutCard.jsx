import React from "react";
import WorkoutTitle from '../components/WorkoutCard/WorkoutTitle'
import WorkoutDetail from '../components/WorkoutCard/WorkoutDetail'

const WorkoutCard = ({ workout }) => {
  return (
    <article className="bg-neutral-100 w-full py-2 px-4 rounded-md">
      <WorkoutTitle title={workout?.title}/>
      <div className="flex items-center justify-between text-neutral-600 mt-5">
        <WorkoutDetail name={'Load (kg):'} value={workout?.load}/>
        <WorkoutDetail name={'repetitions:'} value={workout?.reps}/>
        <WorkoutDetail name={'sets:'} value={workout?.sets}/>
      </div>
    </article>
  );
};

export default WorkoutCard;
