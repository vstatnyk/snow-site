const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const SnowHomeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  url: { type: String, default: "" },
  urlPlaceHolder: { type: String, default: "" },
  key: { type: String, default: "" },
});

const homeElement = mongoose.model("homeElement", SnowHomeSchema);
module.exports = homeElement;
