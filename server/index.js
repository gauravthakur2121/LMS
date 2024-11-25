import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Load environment variables
dotenv.config({});

// Connect to the database
connectDB();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json()); 
app.use(cookieParser()); 
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));

// Routes setup
app.use("/api/v1/user", userRoute);

app.get("/home", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Message is coming from backend gaurav "
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
