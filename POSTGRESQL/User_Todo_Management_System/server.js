import express from "express";
import userRoutes from "./routes/users.routes.js";
import todosRoutes from "./routes/todos.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app=express();
app.use(express.json());
app.use("/users_todo", userRoutes);
app.use("/todos", todosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on the port ${PORT}`);
});
