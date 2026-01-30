import express from "express";
import authRoutes from "./routes/auth.routes.js";
import todoRoutes from "./routes/todos.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

app.use("/users", authRoutes);
app.use("/todos", todoRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running!");
});
