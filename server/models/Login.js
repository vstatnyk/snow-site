const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, default: "user" },
  key: { type: String, default: "" },
});

const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
