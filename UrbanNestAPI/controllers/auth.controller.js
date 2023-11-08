const User = require("../models/user.model.js");
import bcryptjs from "bcryptjs";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  res.status(201).json("New user created!");
};

module.exports = signup;
