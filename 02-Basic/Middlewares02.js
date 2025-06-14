const express = require("express");
const app = express();

app.use("/things", function (req, res, next) {
  console.log(`A request for things recived at ${Date.now()}`);
  next();
});
app.get('/things',function(req,res){
	res.send("Things are here")
})

app.listen(4000)