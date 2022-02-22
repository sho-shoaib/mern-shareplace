import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A post must have a title"],
    maxlength: 60,
    trim: true,
  },
  image: {
    type: String,
    required: [true, "A post must have a image"],
  },
  caption: {
    type: String,
    required: [true, "A post must have a caption"],
    trim: true,
  },
  creator: {
    type: String,
    required: [true, "A post must have a creator"],
  },
  date: {
    type: Date,
    required: [true, "A post must have a date"],
  },
  creatorId: {
    type: String,
    required: [true, "A post must have a creator's id"],
  },
  likes: {
    type: Number,
    required: [true, "A post must have likes"],
    default: 0,
  },
});

export const Place = mongoose.model("Place", placeSchema);
