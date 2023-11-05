import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import notes from "./routes/notes.js";
import { connectDB } from "./config/db.js";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/notes", notes);

app.listen(3333, () => {
  try {
    connectDB();

    console.log("listening on port 3333");
    console.log("connected to Data Base ");
  } catch (error) {
    console.error(`Error messaging ${error.message}`);
    process.exit(1);
  }
});
