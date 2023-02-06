import routes from "./routes/index.js";
import express from "express";
import morgan from "morgan";
import upload from "./services/multer.js";
import bodyParser from "body-parser";
import { httpCreateBlog } from "./controllers/blogController.js";
const app = express();
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.get("/", (req, res) => {
  return res.json({ message: "welcome" });
});
//image upload
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use("/api", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No image provided" });
  }
  const path = req.file.path;
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  const newPath = await uploader(path);
  fs.unlinkSync(path);
  res.status(200).json({
    message: "image uploaded successfully",
    data: newPath,
  });
});

export default app;
