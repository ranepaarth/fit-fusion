import React from "react";
import {formatDistance} from 'date-fns'
const WorkoutCreatedAt = ({ createdAt }) => {

  return (
    <span className="text-neutral-400 text-base font-normal flex items-center gap-1">
      <p>{formatDistance(new Date(createdAt),new Date(),{addSuffix: true})}</p>
    </span>
  );
};

export default WorkoutCreatedAt;
