import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
  },
  image: {
    type: String,
  },
  placeCount: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
