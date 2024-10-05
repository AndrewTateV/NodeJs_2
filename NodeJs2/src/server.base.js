import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

export const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

export const mongoDBConnectSuccess = (PORT) => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};

export const mongoDBConnectError = (err) => {
  console.log(err);
};

export const mongoDBConnectData = {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
};
