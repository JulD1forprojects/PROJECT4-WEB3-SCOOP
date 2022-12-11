// importing libraries
const dotenv = require("dotenv"); // for setting important key files in env
const cookieParser = require("cookie-parser"); // for setting token in cookie
const express = require("express"); // backend framework
const app = express(); // creating backend
const cors = require("cors");

const connectDatabase = require("./config/database"); // getting connecting to database function

// Config
dotenv.config({ path: "server/config/config.env" }); // getting key files

app.use(express.json()); // importing express json to get api body
app.use(cookieParser()); // importing cookie-parser to read cookie from requests
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

connectDatabase(); // connecting to database function
const PORT = process.env.PORT || 500; // setting backend port

// Router Imports

const user = require("./routes/userRouter");
const article = require("./routes/articleRouter");
const category = require("./routes/categoryRouter");

// setting the apis by routes
app.use("/api/v1", user);
app.use("/api/v1", article);
app.use("/api/v1", category);

// Connecting To Database

app.listen(PORT, () => {
  console.log(`Server Is Running At Port ${PORT}`);
});
