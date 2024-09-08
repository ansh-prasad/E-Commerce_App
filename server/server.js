import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

//Data Nase Connection
connectDB();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

import testRoutes from "./routes/testRoutes.js";
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1", testRoutes);
app.use("/api/v1/user", userRoutes);

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcomm To Node Server</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${process.env.PORT}`.bgYellow);
});
