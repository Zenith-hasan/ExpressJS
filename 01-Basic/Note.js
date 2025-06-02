//* Express is a minimal and flexible Node.js web application framework that provide a robust set of features for web and mobile application.

//* It is an open source framework developed and maintainded by the Node.js foundation.

//* Express provides a minimal interface to build our application. It provides us the tools that require to build our app.It's flexible as there are numerous modules available on npm,which can be directly plugged into Express.


//* 


const express = require('express')
const app = express()

app.get('/',function(req,res){
	res.send(`Hello from NodeJS`)
})

app.get('/home',(req,res) => {
	res.send(`This is homepage of our app!`)
})

app.listen(3000,() => {
	console.log(`Server listening at http://localhost:3000`)
})
