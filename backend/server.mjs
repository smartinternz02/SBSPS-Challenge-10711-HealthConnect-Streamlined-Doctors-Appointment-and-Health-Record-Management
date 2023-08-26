
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.mjs";

const app = express();
dotenv.config();
connectDB();


import authRoutes from './Routes/auth.mjs'

import cookieParser from 'cookie-parser';

app.use(cookieParser())
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Oringin,X-Requested-With,Content-Type,Accept",
        
    );
    next();  
})  



app.get("/", (req, res) => {
  res.send("Hello, Abhi!");
});

// auth

app.use("/api/auth",authRoutes)

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
