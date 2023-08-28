import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.mjs";

const app = express();
dotenv.config();
connectDB();

import authRoutes from "./Routes/auth.mjs";

import cookieParser from "cookie-parser";

<<<<<<< HEAD
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Oringin,X-Requested-With,Content-Type,Accept"
  );
  next();
});
app.use(cookieParser());
app.use(express.json());
=======

>>>>>>> 03b952b52dd3e5e88abe835fdd1636b3c2f714b1

app.get("/", (req, res) => {
  res.send("Hello, Abhi!");
});

app.use(cookieParser())
app.use(express.json());
// auth

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
