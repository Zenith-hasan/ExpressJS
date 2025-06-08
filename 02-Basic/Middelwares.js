const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  res.send("Your heart is healthy :)");
});

app.get('/patients',(req,res) => {
	const username = req.headers.username;
	const password = req.headers.password;
	const kidneyID = req.query.kidneyID;
	
	if(username === "Hasan" && password === "abc"){
		if(kidneyID == 1 || kidneyID == 2){
			res.json({
				msg : `${username} has good kindey condition and to know more get the pass ${password} .` 
			})
		}
	}
});

app.listen(3300, function () {
  console.log(`Server is listening at the port http://localhost:3300`);
});
 