import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("my name is tareq");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server is running on ec2-54-174-125-1.compute-1.amazonaws.com:${PORT}`
  );
});
