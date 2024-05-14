const { MongoClient } = require('mongodb')
//connect mongo db

const uri = "mongodb://localhost:27017"
const dbName = "db_reminder"

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