const mongoose = require("mongoose");

const mongodb = process.env.MONGODB_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(
      mongodb,
      { useNewUrlParser: true, useUnifiedTopology: true },
      console.log("mongo connected")
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnect;
