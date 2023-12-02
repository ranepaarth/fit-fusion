import { formatDistance } from "date-fns";
import React from "react";
const WorkoutCreatedAt = ({ createdAt, updatedAt }) => {
  return (
    <span className="workout-card-createdAt">
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
