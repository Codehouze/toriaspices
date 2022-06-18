const express = require("express");
const app = express(),
  bodyParser = require("body-parser");
const Port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  console.log("api/users called!!!!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user::::::::", user);
  users.push(user);
  res.json("User added");
});

app.get("/", (req, res) => {
  res.send("App Works !!!");
});

app.listen(Port, () => {
  console.log(`Server listening on the port::${Port}`);
});
