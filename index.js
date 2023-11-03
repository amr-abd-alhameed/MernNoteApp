import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

dotenv.config({
  path: "./config/config.env",
});

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello baby");
});

app.listen(3333, () => {
  console.log("listening on port 3333");
});
