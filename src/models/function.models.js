const {ConnectDatabase} = require('./db.js')

exports.getAllType = async (req,res) =>{
    try{
        const db = await ConnectDatabase()
        console.log("type connected")
    }
    catch(err){
        console.log(err)
    }
}

Module.exports = {getAllType}