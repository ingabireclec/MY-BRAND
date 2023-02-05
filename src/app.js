import routes from "./routes/index.js";
import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.get("/api", routes);
app.get("/", (req, res) => {
  return res.json({ message: "welcome" });
});
export default app;

// app.use("/upload-image", upload.single("image"), async (req, res) => {
//   const path = req.file.path;
//   const uploader = async (path) => await cloudinary.uploads(path, "Images");
//   const newPath = await uploader(path);
//   fs.unlinkSync(path);
//   res.status(200).json({
//     message: "image uploaded successfully",
//     data: newPath,
//   });
// });
