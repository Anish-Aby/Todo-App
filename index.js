"use strict";

// import statements
import express from "express";
import bodyParser from "body-parser";

// declaring express app and port
const app = express();
const PORT = process.env.PORT || 3030;
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let workItems = [];
let items = [];

// get for landing page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// get for today page
app.get("/today", (req, res) => {
  let today = getTodayDate();

  let data = {
    day: today[0],
    month: today[1],
    date: today[2],
    item: items,
  };

  res.render("today.ejs", data);
});

// get for work page
app.get("/work", (req, res) => {
  let today = getTodayDate();

  let data = {
    day: today[0],
    month: today[1],
    date: today[2],
    item: workItems,
  };

  res.render("work.ejs", data);
});

// post for work

app.post("/work", (req, res) => {
  let heading = req.body["modal-heading-input"];
  let description = req.body[["modal-description-input"]];
  let today = getTodayDate();

  let itemObject = {
    heading: heading,
    description: description,
  };

  workItems.push(itemObject);

  res.render("work.ejs", {
    item: workItems,
    day: today[0],
    month: today[1],
    date: today[2],
  });
});

// post for today
app.post("/today", (req, res) => {
  let heading = req.body["modal-heading-input"];
  let description = req.body[["modal-description-input"]];
  let today = getTodayDate();

  let itemObject = {
    heading: heading,
    description: description,
  };

  items.push(itemObject);

  res.render("today.ejs", {
    item: items,
    day: today[0],
    month: today[1],
    date: today[2],
  });
});

// server listening
app.listen(PORT, () => {
  console.log(`Server up and running, Listening in port ${PORT}`);
});

function getTodayDate() {
  let today = new Date();
  let day = today.getDay();
  let month = today.getMonth();
  let date = today.getDate();
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let data = {
    day: dayNames[day],
    month: monthName[month],
    date: date,
  };

  return [dayNames[day], monthName[month], date];
}
