const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "Please Signup/Login to continue !!" });
    return;
  }
  const token = authorization?.split(" ")[1];

  if (token === undefined) {
    res.status(400).json({ error: "Please Sign in to Continue!!" }).end();
    return;
  }
  try {
    const { _id } = jwt.verify(token, process.env.SECRET_KEY);

    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Sorry!! You are not Authorized." });
  }
};

module.exports = { requireAuth };
