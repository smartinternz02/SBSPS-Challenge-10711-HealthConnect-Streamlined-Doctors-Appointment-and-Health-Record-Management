import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.mjs";
const app = express();
dotenv.config();
connectDB();

const userRoutes = require("./Routes/userRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, YOGII!");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
