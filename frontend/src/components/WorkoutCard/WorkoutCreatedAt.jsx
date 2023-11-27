import { formatDistance } from "date-fns";
import React from "react";
const WorkoutCreatedAt = ({ createdAt, updatedAt }) => {
  return (
    <span className="text-neutral-400 text-base font-normal flex items-center gap-1">
      {createdAt !== updatedAt ? (
        <p>Updated: {formatDistance(new Date(updatedAt), new Date(), { addSuffix: true })}
        </p>
      ) : (
        <p>Created: {formatDistance(new Date(createdAt), new Date(), { addSuffix: true })}
        </p>
      )}
    </span>
  );
};

export default WorkoutCreatedAt;
