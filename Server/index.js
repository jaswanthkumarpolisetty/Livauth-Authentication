import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";
const app = express();

const port = process.env.PORT || 9000;
connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

//Routers

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
