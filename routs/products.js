const express = require('express');//ייבוא ספריית אקספרס
const router = express.Router();

const products = [];

router.get('/',(req,res)=>{
    res.status(200).json(products)
});

//מייצא
module.exports = router;