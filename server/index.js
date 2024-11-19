import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./database/db.js";

connectDB();
const app = express();
const PORT = process.env.PORT || 8090;


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})