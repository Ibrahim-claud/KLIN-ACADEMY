const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const students = require("./api/route");

const port = "https://reeler.netlify.app";
var corsOptions = {
  origin: port,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions)); //add corsOptions as an argument in cors() when deploying to netlify
app.use("/.netlify/functions/index/api/students", students); //Router to use Netlify Functions

//app.listen(port, () => console.log(`Listening on Port ${port}....`));
module.exports.handler = serverless(app);
