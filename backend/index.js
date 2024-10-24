import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.DB_URL);
  console.log("DB connected successfully!");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log("Listening on 3000...");
});
