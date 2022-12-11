//importing mongoose for creating model

const mongoose = require("mongoose");

//! importing validator to check if email is valid
const validator = require("validator");

//! importing bcrypt to encrypt the password
const bcrypt = require("bcryptjs");

//! importing jwt to create authentication token
const jwt = require("jsonwebtoken");

//!  model reference
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: [30, "Name Cannot Excedd 30 Characters"],
    minlength: [4, "Name should have more than 4 characters"],
  },

  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    validate: [validator.isEmail, "Please Enter Valid Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minlength: [8, "Password should have more than 8 characters"],
    select: false,
  },
});

//! function which will run before saving user in database, this function will encrypt the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

//! JWT TOKEN / getting jwt token via user id
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// ! Compare Password

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
