import mongoose from "mongoose";

export const connectDB = async (mongoUri) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // exit the app if DB connection fails
  }
};
