import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const EmptyWorkoutCard = () => {
  const {user}  =useAuthContext()
  return (
    <article className="workout-card-body">
      <header className="font-bold text-sky-700 text-center">No Workouts Yet</header>
      <footer className="mt-3 text-base text-neutral-700">{!user?"Want to create a workout ??":`"If you want something you've never had, you must be willing to do something you've never done."`}</footer>
     {!user?<span className="flex items-center text-base gap-x-4 text-blue-500 mt-1">
       <NavLink to='/signup'>
        <p className="hover:underline">Create new account</p>
       </NavLink>
       <NavLink to='/login'>
        <p className="hover:underline">Log In</p>
       </NavLink>
     </span>:""}
    </article>
  );
};

export default EmptyWorkoutCard
