const fs = require('./function.models.js')

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

module.exports = ApiModels