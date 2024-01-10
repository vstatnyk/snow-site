const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const SnowMarketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, default: "" },
  contactName: { type: String, required: true },
  contactMethod: { type: String, required: true },
  timeStamp: { type: String, default: Date.now() },
});

const listing = mongoose.model("listing", SnowMarketSchema);
module.exports = listing;
