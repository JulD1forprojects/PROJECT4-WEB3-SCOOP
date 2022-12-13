// importing express
const express = require("express");

//! importing controllers
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  updatePassword,
  updateProfile,
} = require("../controllers/userController");

//! getting middleware to check if user is logged in
const { isAuthenticatedUser } = require("../middlewares/isAuthenticated");

// getting router
const router = express.Router();

// setting routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

// exporting router
module.exports = router;
