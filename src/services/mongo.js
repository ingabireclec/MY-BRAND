import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;
mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("database connected!!");
});
mongoose.connection.on("open", () => {
  console.log("error happened");
});
const mongoConnect = async () => {
  await mongoose.connect(MONGO_URL);
};
const mongoDisconnect = async () => {
  await mongoose.disconnect();
};
export { mongoConnect, mongoDisconnect };
