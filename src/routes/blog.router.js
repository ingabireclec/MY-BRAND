import { Router } from "express";
import {
  httpCreateBlog,
  httpDisplayBlog,
  httpUpdateBlog,
  httpDeleteBlog,
} from "../controllers/blogController.js";
//import upload from "../services/multer.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });
const Blogrouter = Router();
Blogrouter.post("/", upload.single("image"), httpCreateBlog);
Blogrouter.get("/", httpDisplayBlog);
Blogrouter.patch("/:id", httpUpdateBlog);
Blogrouter.delete("/", httpDeleteBlog);

export default Blogrouter;
