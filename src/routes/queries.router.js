import { Router } from "express";
import httpCreateContact from "../controllers/queriesController.js";
import httpDisplayContacts from "../controllers/queriesController.js";

const queriesrouter = Router();
router.post("/", httpCreateContact);
router.get("/", httpDisplayContacts);

export default queriesrouter;
