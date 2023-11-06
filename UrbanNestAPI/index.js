const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to UrbanNestDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
