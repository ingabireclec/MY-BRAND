import { Router } from "express";
import {
  httpCreateBlog,
  httpDisplayBlog,
  httpUpdateBlog,
  httpDeleteBlog,
} from "../controllers/blogController.js";

const Blogrouter = Router();
Blogrouter.post("/", httpCreateBlog);
Blogrouter.get("/", httpDisplayBlog);
Blogrouter.patch("/", httpUpdateBlog);
Blogrouter.delete("/", httpDeleteBlog);

export default Blogrouter;
