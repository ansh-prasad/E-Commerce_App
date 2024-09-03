import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcomm To Node Server</h1>");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${process.env.PORT}`.bgYellow);
});
