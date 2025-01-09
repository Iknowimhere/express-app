import express from "express";
import { getTodos, postTodo } from "../controllers/todoControllers.js";

let router=express.Router();


router.get("/api/v1/todo",getTodos)
router.post("/api/v1/todo",postTodo)
// router.get("/api/v1/todo/:id",getTodo)
// router.update("/api/v1/todo",updateTodo)
// router.delete("/api/v1/todo",deleteTodo)

export default router;