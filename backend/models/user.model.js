const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//The static keyword defines a static method for a model. Static methods aren't called on instances of the model.

//Since we don't have access to the User model, we need to use 'this' keyword.

//Thus cannot use arrow functions
userSchema.statics.signup = async function (firstName, userName, password) {
  //email and password validation

  if (!firstName || !userName || !password) {
    throw Error("All fields are required");
  }

  if (!validator.isEmail(userName)) {
    throw Error("Please enter a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Please enter a strong password");
  }

  const exists = await this.findOne({ userName });

  // validating user by searching if the username already exists
  if (exists) {
    throw new Error("Username already exists\nPlease try Logging in");
  }

  //if not then we will hash the password and store it in the database

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ firstName, userName, password: hash });

  return user;
};

userSchema.statics.login = async function (userName, password) {
  if (!userName || !password) {
    throw Error("All fields are required");
  }

  const user = await this.findOne({ userName });

  if (!user) throw Error("Incorrect username");

  //comparing the input PWD and already existing PWS in the database 

  //Done by first retrieving the user using the findOne({}) method wherein we have passed email as a key

  //compare() method returns BOOLEAN
  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Incorrect Password");

  return user;
};

module.exports = mongoose.model("User", userSchema);
