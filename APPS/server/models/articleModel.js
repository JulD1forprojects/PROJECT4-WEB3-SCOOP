//importing mongoose for creating model

const mongoose = require("mongoose");

// ! model reference

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Article Title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Article Description"],
  },
  category: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

// add model schema to mongodb

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;
