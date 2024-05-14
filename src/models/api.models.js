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

module.exports = ApiModels