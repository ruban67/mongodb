// const express = require("express");
import express from "express";
import { MongoClient } from "mongodb";
import moviesRouter from "./routes/movies.routes.js";
import * as dotenv from "dotenv";
dotenv.config();
console.log(process.env.MONGO_URL);//environment variables
const app = express();

const PORT = process.env.PORT;


//connection
// const MONGO_URL ="mongodb://127.0.0.1";
const MONGO_URL =process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL);//call
await client.connect();
console.log("mongo is connected!!");

app.use(express.json());


app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use('/movies',moviesRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

export { client };