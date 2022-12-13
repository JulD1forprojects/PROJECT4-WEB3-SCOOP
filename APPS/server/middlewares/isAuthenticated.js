// importing jwt for creating token
const jwt = require("jsonwebtoken");

// importing user model for referecing user
const User = require("../models/userModel");

exports.isAuthenticatedUser = async (req, res, next) => {
  try {
    // ! getting token from cookie
    const { token } = req.cookies;

    // if no user return error to get login
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login To Access This Resource",
      });
    }

    //! verify token
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    //! return user profile from the token
    req.user = await User.findById(decodedData.id);

    next();
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "You Are Not Authenticated",
    });
  }
};
