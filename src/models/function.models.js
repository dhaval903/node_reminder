// Importing required modules
const { ConnectDatabase } = require('../config/db.js');
const bcrypt = require('bcryptjs');
// Define the getAllType function
async function getAllType() {
    try {
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_type_master")
        const documents = await collection.find({ is_del: 0 }).toArray();
        return documents;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function getAllServices() {
    try {
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_service_master")
        const documents = await collection.find({ is_del: 0 }).toArray()
        return documents;
    }
    catch (err) {
        throw err;
    }
}

async function getAllProduct(req) {
    // console.log(req)
    const created_type = req.created_type
    try {
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_product_master");
        const documents = await collection.find({ is_del: 0, created_type: created_type }).toArray()
        return documents;
    }
    catch (err) {
        throw err
    }
}

async function getAllUsers(req) {
    try {
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_user_master");
        const documents = await collection.find().toArray();
        return documents;
    }
    catch (err) {
        throw err;
    }
}

async function comparePassword(password, user_password) {
    try {

        const isMatch = await bcrypt.compare(password, user_password);

        // console.log(encryptrd_pass,old_pass)

        if (isMatch) {
            // console.log("hello")
            return "1";
        }
        else{
            // console.log("hello1")
            return "0";
        }
        // return bcrypt.compare(password,user_password);
    }
    catch (err) {
        throw err;
    }
}
// Export the getAllType function
module.exports = { getAllType, getAllServices, getAllProduct, getAllUsers, comparePassword };

// Now you can use getAllType elsewhere in your code after its definition