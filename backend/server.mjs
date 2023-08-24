// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./db/db.mjs";
// var router=express.Router()
// const app = express();
// dotenv.config();
// connectDB();

// const cors = require('cors');
// import { login,Signup,loginwithgoogle } from "./db/auth.js";
// app.use("/", router);


// // Enable CORS for all routes
// app.use(cors());

// app.use(cors({
//   origin: 'http://localhost:5173/', // Replace with your frontend's domain
//   credentials: true // This allows cookies to be included in the request
// }));

// app.get("/", (req, res) => {
//   res.send("Hello, abhi!");
// });

// // Signup
// router.post("/api/signup" ,Signup);

// // login2
// router.post("/api/login",login );

// // google
// router.post("/api/google",loginwithgoogle);



// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });

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
  res.send("Hello, abhi!");
});

// auth

app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
