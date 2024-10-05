import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  mongoDBConnectSuccess,
  mongoDBConnectError,
  mongoDBConnectData,
} from "./src/server.base.js";

dotenv.config();
const PORT = process.env.PORT || 9898;

mongoose
  .connect(process.env.DB_URL, mongoDBConnectData)
  .then(mongoDBConnectSuccess(PORT))
  .catch(mongoDBConnectError);
