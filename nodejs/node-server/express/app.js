import express from "express";

// https://expressjs.com/en/4x/api.html

const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
  res.end("hi");
});

app.listen(8080);
