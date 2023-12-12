const User = require("../models/user.model");
const jsonwebtoken = require("jsonwebtoken");

const createToken = (_id) => {
  return jsonwebtoken.sign({ _id }, process.env.SECRET_KEY, {
    expiresIn: "3 days",
  });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });
  res.status(200).json(users);
};

const loginUserController = async (req, res) => {

  const {userName,password}= req.body
  try {
    const user = await User.login(userName, password);

    //creating a JWT 
    const jwtToken = createToken(user._id)
    const firstName = user?.firstName
    res.status(200).json({ jwtToken, userName,firstName});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupUserController = async (req, res) => {
  const { firstName, userName, password } = req.body;
  try {
    const user = await User.signup(firstName, userName, password);

    //creating a JWT 
    const jwtToken = createToken(user._id)

    res.status(200).json({ jwtToken,firstName, userName });
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
