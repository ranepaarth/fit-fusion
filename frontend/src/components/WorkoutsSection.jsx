import React, { useEffect } from "react";
import {
  EmptyWorkoutCard,
  WorkoutCard,
  useWorkoutContext,
} from "../componentsRoute";
import { useAuthContext } from "../context/AuthContext";
const WorkoutsSection = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, fetchAllWorkouts } = useWorkoutContext();
  const {user} = useAuthContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_LINK}/api/workout`,{
          headers:{
            'Authorization': `Bearer ${user?.jwtToken}`
          }
        });

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
    if(user) fetchWorkouts();
  }, [user]);

  return (
    <section className="flex flex-col gap-4 w-full md:w-[50%]">
      {user && workouts?.map((workout) => {
        return <WorkoutCard workout={workout} key={workout._id} />;
      })}

      {!user || workouts?.length === 0? <EmptyWorkoutCard /> : ""}
    </section>
  );
};

export default WorkoutsSection;
