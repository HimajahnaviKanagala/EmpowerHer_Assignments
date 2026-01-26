import express from "express";
import {
  createTodos,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todos.controller.js";

const router = express.Router();

router.post("/add-todo", createTodos);
router.get("/get-my-todo/:userId", getTodos);
router.put("/update-todo/:todoId", updateTodo);
router.delete("/delete-todo/:todoId", deleteTodo);

export default router;
