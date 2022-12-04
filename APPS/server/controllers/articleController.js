const Article = require("../models/articleModel");

//! Create Article

exports.createArticle = async (req, res) => {
  try {
    let article = await Article.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      user: req.user._id,
    });

    const articles = await Article.find().populate("category").populate("user");

    res.status(201).json({
      status: true,
      article: article,
      articles,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Update Article By Id

exports.updateArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article Not Found",
      });
    }

    article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
      runValidators: true,
    });
    res.status(200).json({
      status: true,
      article: article,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Get All Articles

exports.getAllArticles = async (req, res) => {
  try {
    const articleCount = await Article.countDocuments();
    const articles = await Article.find().populate("category").populate("user");

    res.status(200).json({
      status: true,
      articles: articles,
      count: articleCount,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Get Article By Id

exports.getArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.id)
      .populate("category")
      .populate("user");

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article Not Found",
      });
    }

    res.status(200).json({
      status: true,
      article: article,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Delete Article By Id

exports.deleteArticle = async (req, res) => {
  try {
    let article = await Article.findById(req.params.id);

    if (!article) {
      return res.status(404).json({
        success: false,
        message: "Article Not Found",
      });
    }

    article.remove();

    res.status(200).json({
      status: true,
      message: "Article Deleted Successfully",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};
