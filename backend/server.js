const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const workoutRouter = require("./router/workoutRouter");

app.use("/api/workout", workoutRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
