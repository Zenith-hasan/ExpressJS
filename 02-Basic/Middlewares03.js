// Middlewares works in chain. Each middlewares calls next() to pass control.if any middlewares forget the next() , the request will hang.

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First Middlewares");
  next();
});

app.use((req, res, next) => {
  console.log(`Second Middlewares`);
  next();
});

// condition in middlewares

function authMiddleware(req, res, next) {
  if (req.headers.token === "1245") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to the Dashboard");
});
