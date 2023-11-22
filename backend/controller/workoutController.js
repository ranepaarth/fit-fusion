const getAllWorkoutsController = (req, res) => {
  res.json({ msg: "Get all workouts" });
};
const getSingleWorkoutController = (req, res) => {
  res.json({ msg: "Get single workout" });
};
const createWorkoutController = (req, res) => {
  res.json({ msg: "Create a new workout" });
};

const deleteWorkoutController = (req, res) => {
  res.json({ msg: "Delete single workout" });
};

const updateWorkoutController = (req, res) => {
  res.json({ msg: "Update single workout" });
};
module.exports = {
  getAllWorkoutsController,
  getSingleWorkoutController,
  createWorkoutController,
  deleteWorkoutController,
  updateWorkoutController,
};
