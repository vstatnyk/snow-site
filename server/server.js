const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors module
require("dotenv").config();

// var mime = {
//   html: "text/html",
//   txt: "text/plain",
//   css: "text/css",
//   gif: "image/gif",
//   jpg: "image/jpeg",
//   png: "image/png",
//   svg: "image/svg+xml",
//   js: "application/javascript",
// };

// db;
// localhost:27017

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

// establish connection to database
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database is working"))
  .catch(console.error);

//schemas requirements
const SnowHome = require("./models/SnowHome");

// Home
app.get("/homeElements", async (req, res) => {
  const elements = await SnowHome.find();
  res.json(elements);
  // res.json({ us: "hi" });
});

app.post("/new/homeElement", async (req, res) => {
  const newElement = new SnowHome({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlPlaceHolder: req.body.urlPlaceHolder,
    key: req.body.key,
  });

  newElement.save();
  res.json(newElement);
  // res.json({ us: "hi" });
});

app.post("/delete/homeElement", async (req, res) => {
  const id = req.body.key;
  const listing = await SnowHome.findOne({ key: id });
  await SnowHome.deleteOne(listing);
  const listings = await SnowHome.find();
  res.json(listings);
});

// Marketplace
// app.get("/listings", async (req, res) => {
//   const listings = await SnowMarket.find();
//   res.json(listings);
//   // res.json({ us: "hi" });
// });

// app.post("/new/listing", async (req, res) => {
//   const newListing = new SnowMarket({
//     name: req.body.name,
//     price: req.body.price,
//     contactName: req.body.contactName,
//     contactMethod: req.body.contactMethod,
//   });

//   newListing.save();
//   res.json(newListing);
//   // res.json({ us: "hi" });
// });

// app.get("/delete/listing", async (req, res) => {
//   const id = req.body.id;
//   const listing = await SnowMarket.findById(id);
//   await SnowMarket.deleteOne(listing);
//   const listings = await SnowMarket.find();
//   res.json(listings);
// });

// app.get("/image", (req, res) => {
//   console.log("r");
// });

app.listen(3000, () => {
  console.log("server is working");
});
