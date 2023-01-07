const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoute = require("./routes/todos");
const mongoose = require("mongoose");
//enabling CORS support and adding body-parser to the express application. The library also helps extract the JSON body from the incoming HTTP request.
//Also, during the application startup, we are connecting to the back-end MongoDB database with the help of the mongoose library.
app.use(cors());
app.use(bodyParser.json());
app.use("/todos", todoRoute);
mongoose
  .connect("mongodb://localhost/mernstack")
  .then((data) => {
    console.log("connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000);
