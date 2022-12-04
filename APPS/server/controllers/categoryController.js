const Category = require("../models/categoryModel");

//! Create category

exports.createCategory = async (req, res) => {
  try {
    let category = await Category.create(req.body);
    res.status(201).json({
      status: true,
      category: category,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Update category By Id

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "category Not Found",
      });
    }

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      status: true,
      category: category,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

// ! Get All category

exports.getAllCategories = async (req, res) => {
  try {
    const categoryCount = await Category.countDocuments();
    const categories = await Category.find();
    res.status(200).json({
      status: true,
      categories: categories,
      count: categoryCount,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

// ! Get category By Id

exports.getCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    res.status(200).json({
      status: true,
      category: category,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Delete category By Id

exports.deleteCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category Not Found",
      });
    }

    category.remove();

    res.status(200).json({
      status: true,
      message: "Category Deleted Successfully",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};
