import express from "express";
import {
  getAllNotes,
  getSingleNote,
  createNewNote,
  updateNote,
  deleteNote,
} from "../controllers/notes.js";

const router = express.Router();

router.route("/").get(getAllNotes).post(createNewNote);

router.route("/:id").get(getSingleNote).put(updateNote).delete(deleteNote);

export default router;
