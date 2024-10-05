import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";



const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 9898;
const connect = mongoose.connect(process.env.DB_URL, {
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
});





 connect.then(()=>{

                   console.log("connected successful")
                   app.listen(PORT,()=>{console.log(`http://localhost:${PORT}`)})

 }  ).catch((err)=>{`err${err}`}
 )