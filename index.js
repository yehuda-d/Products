//liberies
const express = require('express');
const path = require('path');
const app = express();
const port = 3500;
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static((__dirname)));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// app.use(express.json());


//Routers
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

const products = require('./routs/products');//ייבוק קובץ הפרודקטץ
app.use('/products',products);

//Start
app.listen(port,()=>{console.log(`http://localhost:${port}`)});