// importing libraries
const dotenv = require("dotenv"); // for setting important key files in env
const express = require("express"); // backend framework
const app = express(); // creating backend
const cors = require("cors");

const connectDatabase = require("./config/database"); // getting connecting to database function

// Config
dotenv.config({ path: "server/config/config.env" }); // getting key files

connectDatabase(); // connecting to database function
const PORT = process.env.PORT || 500; // setting backend port

// Connecting To Database
app.listen(PORT, () => {
  console.log(`Server Is Running At Port ${PORT}`);
});
