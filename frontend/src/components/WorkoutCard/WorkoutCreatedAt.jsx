import moment from "moment";
import React from "react";

const WorkoutCreatedAt = ({ createdAt }) => {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <span className="text-neutral-400 text-base font-normal flex items-center gap-1">
      <p>{formatter.format(Date.parse(createdAt))} at </p>
      <p>{moment(createdAt).format("HH:mm")}</p>
    </span>
  );
};

export default WorkoutCreatedAt;
