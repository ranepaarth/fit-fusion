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

  if (!userName || !password) {
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
    throw new Error("userName already exists");
  }

  //if not then we will hash the password and store it in the database

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ firstName, userName, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
