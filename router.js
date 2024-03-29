import { Router } from "express";
import TaskController from "./TaskController.js";

const router = new Router();

router.post("/tasks", TaskController.create);
router.get("/tasks", TaskController.getAll);
router.get("/tasks/:id", TaskController.getOne);
router.put("/tasks", TaskController.update);
router.delete("/tasks/:id", TaskController.delete);

export default router;
