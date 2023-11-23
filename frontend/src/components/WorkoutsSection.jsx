import React, { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
const WorkoutsSection = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {

      const response = await fetch("/api/workout");

      const data = await response.json();

      if (response.ok) setWorkouts(data);
    };

    fetchWorkouts();
  }, []);

  return (

    <section className="flex flex-col gap-4 w-full md:w-[60%] mt-8">
      {workouts?.map((workout) => {
          return <WorkoutCard workout={workout} key={workout._id}/>;
        })}
    </section>
  );
};

export default WorkoutsSection;
