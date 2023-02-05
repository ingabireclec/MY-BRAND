import express from "express";
import Blogrouter from "./blog.router.js";
const routes = express.Router();
routes.use("/blogs", Blogrouter);
export default routes;
