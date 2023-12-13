const express = require("express");
require("dotenv").config();
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const workoutRouter = require("./router/workoutRouter");
const userRouter = require("./router/userRouter");

app.use(cors());
app.use(express.json());
app.use("/api/workout", workoutRouter);
app.use("/api/user", userRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db successfully");
    app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
