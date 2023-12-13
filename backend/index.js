const express = require("express");
require("dotenv").config();
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const workoutRouter = require("./router/workoutRouter");
const userRouter = require("./router/userRouter");

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
// app.use(cors());
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
