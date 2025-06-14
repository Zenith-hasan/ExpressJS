const express = require("express");
const app = express();

// Most specific: things/:name/:id
app.get("/things/:name/:id", function (req, res) {
  res.send(
    `Your requested id is ${req.params.id} and Your product is ${req.params.name}`
  );
});

// Regex validated id: things/:id (only 5 digits)
app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

// Least specific: catch-all for any :id
app.get("/:id", function (req, res) {
  res.send(`The id is you specified is ${req.params.id}`);
});

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:3000`);
});
