import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("my name is tareq");
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}!!`);
});
