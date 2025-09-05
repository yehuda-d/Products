const express = require('express');
const path = require('path');
const app = express();
const port = 3500;

const products = [];

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

app.get('/products',(req,res)=>{
    res.status(200).json(products)
})

app.listen(port,()=>{console.log(`http://localhost:${port}`)});