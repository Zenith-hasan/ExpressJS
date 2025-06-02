// Middleware function are functions that have access to the request object(req),the response object(res) and the next middleware function in the application request-response cycle.

const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("A new request recived at" + Date.now());
  next();
});

app.listen(8000)