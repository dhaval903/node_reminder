const { MongoClient } = require('mongodb')

const dotenv = require('dotenv')
dotenv.config({ path: './dev.env' })
//connect mongo db

const uri = process.env.CONNECTION_STRING
const dbName = process.env.dbName

// MongoClient.connect(uri)
//   .then(client => {
//     console.log("Connected successfully to MongoDB");
//     // Perform database operations here
//     client.close();
//   })
//   .catch(err => {
//     console.error("Error connecting to MongoDB:", err);
//   });

async function ConnectDatabase(){
    try{
        const client = await MongoClient.connect(uri)
        return client.db(dbName)
    }
    catch(error){
        console.log("Error Connecting Database",error)
        throw error
    }
}

module.exports = {ConnectDatabase}