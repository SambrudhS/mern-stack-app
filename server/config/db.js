require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI="mongodb+srv://admin:admin1@test1.9ifty.mongodb.net/?retryWrites=true&w=majority&appName=Test1"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;