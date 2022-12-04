// importing mongooose for mogodb connection
const mongoose = require("mongoose");

// function for connecting mongodb
const connectDatabase = () => {
  // mongoose connection method for connecting to mongodb
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`MondoDB is Connected With Server : ${data.connection.host}`);
    });
};

// exporting the function
module.exports = connectDatabase;
