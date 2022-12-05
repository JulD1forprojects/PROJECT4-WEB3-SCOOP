// importing express
const express = require("express");

// importing controllers
const {
  getAllCategories,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// getting router
const router = express.Router();

// setting routes
router.route("/categories").get(getAllCategories);
router.route("/createcategory").post(createCategory);
router.route("/updatecategory/:id").put(updateCategory);
router.route("/getcategory/:id").get(getCategory);
router.route("/deletecategory/:id").delete(deleteCategory);

// exporting router
module.exports = router;
