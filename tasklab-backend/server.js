import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";     
import connectDB from "./database/db.js";          
import dotenv from "dotenv";
import tasksRouter from "./routes/tasks.js";     
import verifyToken from "./middleware/verifyToken.js";
import morgan from "morgan";

dotenv.config();                                
connectDB(process.env.DATABASE_URL);             

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);                    
app.use("/tasks", verifyToken, tasksRouter);             

const PORT = process.env.PORT || 3000;            
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
