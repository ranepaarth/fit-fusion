import React, { useEffect } from "react";
import {
  EmptyWorkoutCard,
  WorkoutCard,
  useWorkoutContext,
} from "../componentsRoute";
const WorkoutsSection = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, fetchAllWorkouts } = useWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workout");

        const data = await response.json();

        if (response.ok) {
          fetchAllWorkouts(data);
          // setError(false);
        }
        // console.log(response)
      } catch (error) {
        console.log(error)
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <section className="flex flex-col gap-4 w-full md:w-[50%]">
      {workouts?.map((workout) => {
        return <WorkoutCard workout={workout} key={workout._id} />;
      })}

      {workouts?.length === 0 ? <EmptyWorkoutCard /> : ""}
    </section>
  );
};

export default WorkoutsSection;
