const express = require("express");
const app = express();

const morgan = require("morgan");
const router = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");

app.use(morgan("tiny"));
app.use(express.json());

app.use("/gift-exchange", router);

app.get("/", (req, res, next) => {
  res.status(200).json({ ping: "pong" });
});

// app.get("gift-exchange", (req, res) => {
//   res.status(200).json(res.body);
// });

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message || "Something went wrong in the application";
  return res.status(status).json({ error: { status, message } });
});

module.exports = app;
