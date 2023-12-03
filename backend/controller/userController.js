const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

const loginUserController = async (req, res) => {
  res.json({ msg: "login user" });
};

const signupUserController = async (req, res) => {
  const { firstName, userName, password } = req.body;
  try {
    const user = await User.signup(firstName, userName, password);

    res.status(200).json({ firstName, userName, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserController = async (req, res) => {
  res.json({ msg: "user deleted" });
};

module.exports = {
  loginUserController,
  signupUserController,
  deleteUserController,
  getAllUsers,
};
