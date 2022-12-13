// importing mongooose for mogodb connection
const mongoose = require("mongoose");

// function for connecting cmongodb
const connectDatabase = () => {
  // mongoose connect method for connecting mongodb
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
