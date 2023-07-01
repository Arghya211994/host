import mongoose from "mongoose";

const MONGO_URI = "mongodb+srv://cluster0.gbpxx11.mongodb.net/";
const DB_NAME = "hosting";
const USERNAME = "host_123456";
const PASSWORD = "host_123456";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      dbName: DB_NAME,
      user: USERNAME,
      pass: PASSWORD,
    });
    console.log("MongoDB is successfully connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;