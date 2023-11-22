const express = require("express");

const router = express.Router();

router
  .get("/", (req, res) => {
    res.json({ msg: "Get all workouts" });
  })
  .post("/", (req, res) => {
    res.json({ msg: "Create a new workout" });
  });

router
  .get("/:id(\\d+)", (req, res) => {
    res.json({ msg: "Get single workout" });
  })
  .delete("/:id(\\d+)", (req, res) => {
    res.json({ msg: "Delete single workout" });
  })
  .patch("/:id(\\d+)", (req, res) => {
    res.json({ msg: "Update single workout" });
  });

module.exports = router;
