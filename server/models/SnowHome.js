const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const SnowHomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  url: { type: String, default: "" },
  timeStamp: { type: String, default: Date.now() },
});

const homeElement = mongoose.model("homeElement", SnowHomeSchema);
module.exports = homeElement;
