
const mongoose = require("mongoose");

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter your title!"],
  },
  type: {
    type: String,
    required: [true, "Please enter your type!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your description!"],
  },
  images: {
    type: [String],
  },
  videos: {
    type: [String],
  },
  mainImg: {
    type: String,
  },
}, {
    timestamps: true
});


module.exports = mongoose.model("Project", projectSchema)