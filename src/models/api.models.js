const fs = require('./function.models.js')
const { ConnectDatabase } = require('../config/db.js');

const ApiModels = function(){

}

ApiModels.getTypeList = async (reqBody, result) => {
    try {
        const data = await fs.getAllType();
        result(null, data);
    } catch (error) {
        // If an error occurs, pass it to the result
        result(error);
    }
}

ApiModels.getServicesList = async(reqBody,result) =>{
    try {
        const data = await fs.getAllServices();
        result(null,data)
    }
    catch(error)
    {
        result(error)
    }
}

ApiModels.getProductList = async(req,result)=>{
    try{
        const data = await fs.getAllProduct(req)
        result(null,data)
    }
    catch(err){
        result(err)
    }
}

ApiModels.getUsers = async(req,result)=>{
    try{
        const data = await fs.getAllUsers(req)
        result(null,data)
    }
    catch(err)
    {
        result(err)
    }
}

ApiModels.RegisterUser = async(req,result)=>{
    
    const { full_name,company_name,address,email,password,mobile,mobile2,type,service_type} = req

    user  = {
        full_name,
        company_name,
        address,
        email,
        password,
        mobile,
        mobile2,
        type,
        service_type
    }
    try{
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_user_master");
        const documents = collection.insertOne(user);

        result(null,user)
    }
    catch(error)
    {
        result(err)
    }
}

module.exports = ApiModels