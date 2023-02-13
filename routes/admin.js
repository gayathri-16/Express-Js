const express = require('express');
const router = express.Router();



router.get('/add-product', (req,res,next)=>{
  
    res.send('<h1>Add Product</h1> <form action="/store-product" method="post"><input type="text" name="product" /><input type="submit" value="submit" /> </form>')
    
})

router.post('/store-product', (req,res,next)=>{
    console.log('from data:',req.body);
    res.send('<b>Product submited</b>')
    
})
module.exports = router