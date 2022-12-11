//importing mongoose for creating user model
const mongoose = require("mongoose");

//!  model reference
const categorySchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// add model schema to mongodb
const Category = new mongoose.model("Category", categorySchema);

module.exports = Category;
