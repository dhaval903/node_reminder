const ApiModels = require("../models/api.models.js")

exports.getType = async (req, res) => {
    ApiModels.getTypeList(req.body,(err, result) => {
        if (err) {
            const result_data = {
                data:"",
                status:500,
                message:err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else{
            const result_data = {
                data: result,
                status:200,
                message:"Data Retrieved successfully"
            }
            res.send(result_data)
        }
    })
}

exports.getServices = async (req,res)=>{
    ApiModels.getServicesList(req.body,(err,result)=>{
        if (err) {
            const result_data = {
                data:"",
                status:500,
                message:err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else{
            const result_data = {
                data: result,
                status:200,
                message:"Data Retrieved successfully"
            }
            res.send(result_data)
        }
    })
}

exports.getProducts = async(req,res)=>{

    ApiModels.getProductList(req.body,(err,result)=>{
        if (err) {
            const result_data = {
                data:"",
                status:500,
                message:err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else{
            const result_data = {
                data: result,
                status:200,
                message:"Data Retrieved successfully"
            }
            res.send(result_data)
        }
    })
}

exports.getUsersList = async(req,res)=>{
    ApiModels.getUsers(req.body,(err,result)=>{
        if(err)
        {
            const result_data  ={
                data:"",
                status:500,
                message:err.message || "Some error occurred while retrieving data."
            }

            res.send(result_data)
        }
        else{
            const result_data = {
                data:result,
                status:200,
                message:"Data Retrieved successfully"
            }

            res.send(result_data)
        }
    })
}