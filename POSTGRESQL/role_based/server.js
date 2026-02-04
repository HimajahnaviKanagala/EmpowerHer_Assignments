import express from "express";
import dotenv from "dotenv";
import dbHelalthCheck from "./utils/dbHealthCheck.js";
import authRoutes from "./routes/auth.routes.js";
import { authenticate, authorizedRoles } from "./middlewares/auth.middleware.js";
import productsRoutes from "./routes/products.routes.js";

dotenv.config();
const app=express();
app.use(express.json());
app.use("/userrs", authRoutes);
app.use("/products", authenticate,authorizedRoles("ADMIN", "USER"), productsRoutes);

const PORT= process.env.PORT || 5000

app.listen(PORT, async()=>{
    try{
        await dbHelalthCheck();
        console.log(`Server is running on port ${PORT}`); 
    }catch(error){
        console.log("Error occured while connecting the server!");
    }
});