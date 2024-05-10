const express = require('express')
const router = express.Router()

router.get('/customer',(req,res)=>{
    console.log("customer api called")
    res.send("customer api called")
});

module.exports = router;