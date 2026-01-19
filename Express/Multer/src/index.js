import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/users.routes.js";

dotenv.config();

const app = express();
const PORT = 3000;
console.log("Cloud:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("Key:", process.env.CLOUDINARY_API_KEY);

app.use(express.json());
app.use("/users", userRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
