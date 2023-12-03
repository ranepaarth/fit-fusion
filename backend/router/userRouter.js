const express = require("express");
const router = express.Router();

const {
  loginUserController,
  signupUserController,
  deleteUserController,
  getAllUsers,
} = require("../controller/userController");

router
  .post("/login", loginUserController)
  .post("/signup", signupUserController)
  // .delete('/delete/:username',deleteUserController)
  .get("/", getAllUsers);

module.exports = router;
