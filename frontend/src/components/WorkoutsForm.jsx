
import React, { useEffect, useRef, useState } from "react";
import { BiSolidErrorCircle } from "react-icons/bi";
const WorkoutsForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const titleRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps, sets };

    const response = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) setError(data.error);
    else if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setSets("");
      setReps("");
      console.log("added data");
    }
  };

  console.log(error === null);

  useEffect(() => {
    titleRef.current.focus();
  }, []);
  return (
    <form
      className="w-full md:w-[50%] xl:w-[40%] flex flex-col gap-y-2 capitalize sticky"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl text-neutral-50">
        Create A New Workout
      </h1>

      <label className="font-medium text-lg ">exercise title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        ref={titleRef}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg capitalize focus-within: outline-2 focus-within:outline-blue-600"
      />
      <label className="font-medium text-lg">load (in kg):</label>
      <input
        type="text"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />
      <label className="font-medium text-lg">repetitions:</label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />
      <label className="font-medium text-lg">sets:</label>
      <input
        type="text"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        className="border-none outline-none bg-neutral-100 h-10 rounded-md text-blue-700 px-5 py-2 text-lg"
      />

      <div className="flex justify-center mt-5">
        <button className="p-3 w-fit bg-sky-700 rounded hover:bg-opacity-90">
          Add Workout
        </button>
      </div>
      <span
        className={`text-red-500 bg-red-200 border-2 border-red-500 p-3 mt-2 rounded flex items-center gap-2 relative ${
          error === null ? "hidden" : "block"
        }`}
      >
        <p className="text-2xl">
          <BiSolidErrorCircle />
        </p>
        <p>{error}</p>

      </span>
    </form>
  );
};

export default WorkoutsForm;

