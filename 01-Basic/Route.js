// let's see how the dynamic routing works in expressJS


const express = require('express')
const app = express()


app.get('/:id',(req,res) => {
	res.send(`Your id is ${req.params.id}`)
})

app.get('/',(req,res) => {
	res.send("Hello! This is Homepage...")
})

app.listen(3000,function(){
	console.log(`App is listening at http://localhost:3000`)
})


