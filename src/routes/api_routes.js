const express = require('express')
const router = express.Router()
const controller = require('../controller/api.controller.js')
const productValidator = require('../validators/product.validator.js')

router.get('/type', controller.getType)

router.get('/service_list',controller.getServices)

router.post('/get_product_list',productValidator.validateProduct,controller.getProducts)

router.post('/get_users_list',controller.getUsersList)

router.get('/customer',(req,res)=>{
    console.log("customer api called")
    res.send("customer api called")
});

router.post('/resgister_user',controller.registerUser)

module.exports = router;