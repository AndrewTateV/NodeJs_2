import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  app,
  mongoDBConnectSuccess,
  mongoDBConnectError,
  mongoDBConnectData,
} from "./src/server.base.js";

dotenv.config();

const PORT = process.env.PORT || 9559;

import user from "./src/user.schema.js";
import express from "express";

const router = express.Router();

app.use("/", router);

router.route("/insertone").post((req, res) => {
  console.log(req.body);
  user
    .create(req.body)
    .then(() => {
      console.log("Data inserted");
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).send({ message: "Data inserted" });
});

router.route("/insertmany").post((req, res) => {
  console.log(req.body);
  user
    .insertMany([...req.body])
    .then(() => {
      console.log("Data inserted");
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).send({ message: "Data inserted" });
});

router.route("/getall").get((req, res) => {
  user
    .find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.route("/getone").post((req, res) => {
  req.body._id = mongoose.Types.ObjectId(req.body._id);
  user
    .findOne(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

mongoose
  .connect(process.env.DB_URL, mongoDBConnectData)
  .then(mongoDBConnectSuccess(PORT))
  .catch(mongoDBConnectError);
