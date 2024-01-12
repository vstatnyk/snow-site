const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors module
const bcrypt = require("bcrypt");
const saltRounds = 10;
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
const Login = require("./models/Login");

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
    key: Math.random().toString(36).substring(7),
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

// Login
app.get("/login", async (req, res) => {
  const elements = await Login.find();
  res.json(elements);
  // res.json({ us: "hi" });
});

app.post("/new/login", async (req, res) => {
  const email = await Login.findOne({ email: req.body.email });
  if (!email) {
    try {
      const passwordh = await bcrypt.hash(req.body.password, saltRounds);

      const newLogin = new Login({
        email: req.body.email,
        password: passwordh,
        type: req.body.type,
        key: Math.random().toString(36).substring(7),
      });

      await newLogin.save();
      res.json(newLogin);
    } catch (error) {
      // handle the error, maybe send a response with error details
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.json({ error: "Email already exists" });
  }
});

app.post("/signIn", async (req, res) => {
  // const listing = await Login.findOne(req.body.email);
  // await Login.deleteOne(listing);
  // const listings = await Login.find();
  // res.json(listings);
  const login = await Login.findOne({ email: req.body.email });
  if (!login) {
    console.log("email does not exist");
    res.json({ error: "Email does not exist" });
  } else {
    const password = await bcrypt.compare(req.body.password, login.password);
    console.log(password);
    if (password) {
      console.log("password is correct");
      console.log(login);
      res.json(login);
    } else {
      // userPassword;
      res.json({ error: "Password is incorrect" });
    }
  }
  return true;
  // console.log(email);
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
