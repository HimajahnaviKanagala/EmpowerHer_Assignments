import express from "express";
import { getTodos } from "./controller/todo.controller.js";
import { addTodos } from "./controller/todo.controller.js";
import { updateTodo } from "./controller/todo.controller.js";
import { deleteTodo } from "./controller/todo.controller.js";

const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/todos",getTodos);

app.post("/todos", addTodos);
app.get("/todos", getTodos);
app.put("/todos/:id", updateTodo);
app.delete("/todos/:id",deleteTodo);

app.listen(PORT, () => {
  console.log(`Sever is running on Port:${PORT}`);
});
