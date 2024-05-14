const express = require('express')
const router = express.Router()
const controller = require('../controller/api.controller.js')

router.get('/type', controller.getType)

router.get('/customer',(req,res)=>{
    console.log("customer api called")
    res.send("customer api called")
});

module.exports = router;