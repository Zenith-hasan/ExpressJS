const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello! You are a fullstack developer.");
});

app.post("/hello", function (req, res) {
  res.send("You just called the post method at '/hello'!\n");
});

app.all("/test", function (req, res) {
  res.send(
    "ExpressJS all function can handle all type of HTTP request in a particular route."
  );
});

app.listen(3333, () => {
  console.log(`Server listening at port http://localhost:3333`);
});
