// importing express

const express = require("express");

// importing controllers

const {
  getAllArticles,
  createArticle,
  updateArticle,
  getArticle,
  deleteArticle,
} = require("../controllers/articleController");
const { isAuthenticatedUser } = require("../middlewares/isAuthenticated");

// getting router

const router = express.Router();

// setting routes

router.route("/articles").get(getAllArticles);
router.route("/createarticle").post(isAuthenticatedUser, createArticle);
router.route("/updatearticle/:id").put(isAuthenticatedUser, updateArticle);
router.route("/getarticle/:id").get(getArticle);
router.route("/deletearticle/:id").delete(isAuthenticatedUser, deleteArticle);

// exporting router

module.exports = router;
