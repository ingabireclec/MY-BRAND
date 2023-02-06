import express from "express";
import Blogrouter from "./blog.router.js";
import queriesRouter from "./queries.router.js";
const routes = express.Router();
routes.use("/blogs", Blogrouter);
routes.use("/queries", queriesRouter);
export default routes;
