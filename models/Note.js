import mongoose from "mongoose";const NoteSchema = new mongoose.Schema({
  userID: {
    type: "string",
    required: [true, "please provide a user ID"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title"],
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
  color: {
    type: String,
    default: "#FFFFFF",
  },
});

export default mongoose.model("Note", NoteSchema);
