import React, { useEffect } from "react";
import { WorkoutCard, useWorkoutContext } from "../componentsRoute";
const WorkoutsSection = () => {
  // const [workouts, setWorkouts] = useState(null);
  const {workouts,fetchAllWorkouts} = useWorkoutContext()
  useEffect(() => {
    const fetchWorkouts = async () => {

      const response = await fetch("/api/workout");

      const data = await response.json();

      if (response.ok) fetchAllWorkouts(data)
    };

    fetchWorkouts();
  }, []);

  return (

    <section className="flex flex-col gap-4 w-full md:w-[50%] mt-8">
      {workouts?.map((workout) => {
          return <WorkoutCard workout={workout} key={workout._id}/>;
        })}
    </section>
  );
};

export default WorkoutsSection;
