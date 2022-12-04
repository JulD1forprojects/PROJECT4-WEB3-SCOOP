//importing mongoose for creating model

const mongoose = require("mongoose");

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

const User = new mongoose.model("User", userSchema);

module.exports = User;
