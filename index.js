"use strict";

// import statements
import express from "express";
import bodyParser from "body-parser";

// declaring express app and port
const app = express();
const port = 3000;
app.use(express.static("public"));

// get for landing page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/today", (req, res) => {
  res.render("today.ejs");
});

// server listening
app.listen(port, () => {
  console.log(`Server up and running, Listening in port ${port}`);
});
