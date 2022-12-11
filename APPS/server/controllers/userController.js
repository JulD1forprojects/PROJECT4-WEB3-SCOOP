const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// ! Register a User

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! User Already Exists",
      //message: "Error! Please Try Again Later",
    });
  }
};

// ! Login a User

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check user's input of email or password

    if (!email || !password) {
      return res
        .status(400)
        .send({ success: false, message: "Please Enter Email And Password" });
    }

    // get user from database /checking if our user exists in DB
    const user = await User.findOne({ email }).select("+password");

    // if there is no user return error
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid User Details" });
      //.send({ success: false, message: "Invalid Email or Password" });
    }

    // check if given password and password in database is same
    const isPasswordMatched = await user.comparePassword(password);

    // if password is not same  - return error
    if (!isPasswordMatched) {
      return res
        .status(401)
        .send({ success: false, message: "Invalid Email or Password" });
    }

    // ! retrurn token when all success
    sendToken(user, 200, res);
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

// ! User Logout

exports.logout = async (req, res) => {
  try {
    // delete token from cookie
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//! Get User Details By Id

exports.getUserDetails = async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("+password");

    res.status(200).json({
      status: true,
      user: user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Error! Please Try Again Later",
    });
  }
};

//!  Update Password

exports.updatePassword = async (req, res, next) => {
  let user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old Password is Incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("New Password Does Not Match", 400));
  }

  user.password = req.body.newPassword;
  await user.save({ validateBeforeSave: false });

  sendToken(user, 200, res);
};

// ! Update Profile

exports.updateProfile = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully",
    user: user,
  });
};
