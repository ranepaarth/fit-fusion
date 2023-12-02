import React from "react";

const WorkoutDetail = ({ name, value }) => {
  return (
    <span className="flex gap-x-2">
      <p className="text-lg font-bold capitalize">{name}</p>
      <p className="text-lg font-normal">{value}</p>
    </span>
  );
};

export default WorkoutDetail;
