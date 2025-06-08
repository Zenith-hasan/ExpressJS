const express = require("express")
const rateLimit = require("express-rate-limit")
const app = express()

const limiter = rateLimit({
	windowMs: 10*60*1000,
	max: 5,
})

app.use(limiter)

app.get('/',function(req,res) {
	res.send("Hello ExpressJS")


})

app.listen(4000,function(){
	console.log(`Server listening at http://localhost:4000`)
})