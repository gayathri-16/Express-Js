const express = require('express')
const router = express.Router();

router.get('/',(neq,res,next)=>{
    res.send('<h1>Welcom to H&M</h1>')
})
module.exports = router;