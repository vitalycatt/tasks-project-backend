import mongoose from "mongoose";

const Task = new mongoose.Schema({
  title: { type: String, required: true },
});

export default mongoose.model("Task", Task);
