import express from "express";
import ad3eh from "./athkar.json" assert { type: "json" };

const app = express();

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.static("public"));

app.get("/morning", (req, res) => {
  const morningDoaa = ad3eh.morning;
  res.json(morningDoaa);
});

app.get("/night", (req, res) => {
  const nightDoaa = ad3eh.night;
  res.json(nightDoaa);
});

app.listen(5000, () =>
  console.log("server is running on http://localhost:5000")
);
