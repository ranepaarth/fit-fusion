const express = require("express");

const router = express.Router();
const {
  getAllWorkoutsController,
  getSingleWorkoutController,
  createWorkoutController,
  deleteWorkoutController,
  updateWorkoutController,
} = require("../controller/workoutController");

const { requireAuth } = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/", getAllWorkoutsController).post("/", createWorkoutController);

router
  .get("/:id", getSingleWorkoutController)
  .delete("/:id", deleteWorkoutController)
  .patch("/:id", updateWorkoutController);

module.exports = router;
