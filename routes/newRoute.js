import { Router } from "express";
import Controller from "../controllers/newControllers.js";

const newRouter = Router();

newRouter.get("/", Controller.get)
newRouter.post("/", Controller.post)

export default newRouter
