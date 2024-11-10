import { Router } from "express";
import Controller from "../controllers/newControllers.js";

const newRouter = Router();

newRouter.get("/", Controller.createUsernamesGet)
newRouter.post("/", Controller.createUsernamePost)

export default newRouter
