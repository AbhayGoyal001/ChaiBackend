const express = require('express')
require('dotenv').config()
const app = express()


app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/login',(req,res) =>{
    res.send('<h1>Please Log in</h1>')
})
app.listen(process.env.PORT ,()=>{
    console.log(`Port is runing on `);
})