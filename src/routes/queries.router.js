import { Router } from "express";
import queriesController from "../controllers/queriesController.js";

const queriesRouter = Router();
queriesRouter.post("/", queriesController.httpCreateContact);
queriesRouter.get("/", queriesController.httpDisplayContacts);

export default queriesRouter;
