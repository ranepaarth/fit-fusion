const express = require("express");

const router = express.Router();
const {
  getAllWorkoutsController,
  getSingleWorkoutController,
  createWorkoutController,
  deleteWorkoutController,
  updateWorkoutController,
} = require("../controller/workoutController");

router.get("/", getAllWorkoutsController).post("/", createWorkoutController);

router
  .get("/:id(\\d+)", getSingleWorkoutController)
  .delete("/:id(\\d+)", deleteWorkoutController)
  .patch("/:id(\\d+)", updateWorkoutController);

module.exports = router;
