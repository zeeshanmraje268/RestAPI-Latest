const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Successfully Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports=connectDB;
