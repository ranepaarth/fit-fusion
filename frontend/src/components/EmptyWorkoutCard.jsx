import React from "react";
import { NavLink } from "react-router-dom";
import { WorkoutCreatedAt } from '../componentsRoute';

const EmptyWorkoutCard = () => {
  return (
    <article className="workout-card-body">
      <header className="font-bold text-sky-700">Create a new workout</header>
      <footer className="workout-card-footer">Want to create a workout ??</footer>
     <span className="flex items-center text-base gap-x-4 text-blue-500 mt-1">
       <NavLink to='/signup'>
        <p className="hover:underline">Create new account</p>
       </NavLink>
       <NavLink to='/login'>
        <p className="hover:underline">Log In</p>
       </NavLink>
     </span>
    </article>
  );
};

export default EmptyWorkoutCard
