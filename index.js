const express = require("express");
const ad3eh = require("./athkar.json");

const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/morning", (req, res) => {
  const morningDoaa = ad3eh.morning;
  res.json(morningDoaa);
});

app.get("/night", (req, res) => {
  const nightDoaa = ad3eh.night;
  res.json(nightDoaa);
});

app.listen(5000, () => console.log("API server running"));
