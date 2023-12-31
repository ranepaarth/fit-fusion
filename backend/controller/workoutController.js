const Workout = require("../models/workout.model");
const mongoose = require("mongoose");
const getAllWorkoutsController = async (req, res) => {
  const user_id = req.user._id
  try {
    const workout = await Workout.find({user_id}).sort({ createdAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSingleWorkoutController = async (req, res) => {
  const { id } = req.params;
  try {
    // if (!mongoose.Types.ObjectId.isValid(id))
    // res.status(404).json({ error: `Workout not found` }); ref:line-20
    const workout = await Workout.findById({ _id: id });
    if (!workout)
      //valid id but not existing
      res.status(404).json({ error: `The  provided id does not exist` });
    else res.status(200).json(workout);
  } catch (error) {
    //invalid id
    res.status(404).json({
      error: `Workout with id: ${id} not found. Please provide a valid id.`,
    });
  }
};

const createWorkoutController = async (req, res) => {
  const { title, reps, sets, load } = req.body;
  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("loads");
  if (!sets) emptyFields.push("sets");
  if (!reps) emptyFields.push("reps");
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: "Please fill out missing fields", emptyFields });
  try {
    const user_id = req.user._id;
    console.log(user_id,"\n",req.user._id)
    const workout = await Workout.create({ title, reps, sets, load, user_id });
    res.status(200).json(workout);
  } catch (error) {
    //Existing Workout with the same title
    if (error.keyValue?.title)
      res.status(400).json({
        error: `${error.keyValue.title} workout already exists. Please try updating it.`,
      });
  }
  //Below line is Responsible for Error ==> Cannot set headers after they are sent to the client
  // res.json({ msg: "Create a new workout" });
};

const deleteWorkoutController = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout)
      //Valid id but not existing
      res.status(404).json({ error: `The  provided id does not exist` });
    else res.status(200).json(workout);
  } catch (error) {
    //invalid id
    res.status(404).json({ error: `Please provide a valid Workout id` });
  }
};

const updateWorkoutController = async (req, res) => {
  const { id } = req.params;
  const updatedObject = req.body;
  const { title, reps, sets, load } = req.body;
  let emptyFields = [];
  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("loads");
  if (!sets) emptyFields.push("sets");
  if (!reps) emptyFields.push("reps");
  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: "Please fill out missing fields", emptyFields });
  try {
    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { $set: updatedObject }
    );
    if (!workout)
      //valid id but not existing
      res.status(404).json({ error: `The  provided id does not exist` });
    else res.status(200).json(workout);
  } catch (error) {
    // res.status(400).json({ error: error.message });

    //updating a workout title with an already existing title
    if (error.codeName === "DuplicateKey")
      res.status(400).json({
        error:
          "Workout with same title already exists. Please try updating it.",
      });
    //invalid id
    else if (error.kind === "ObjectId")
      res.status(404).json({
        error: `Workout with id:${id} does not exist. Please try again with a valid id.`,
      });
    else console.log(error);
  }
};
module.exports = {
  getAllWorkoutsController,
  getSingleWorkoutController,
  createWorkoutController,
  deleteWorkoutController,
  updateWorkoutController,
};
