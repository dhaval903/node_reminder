// Importing required modules
const { ConnectDatabase } = require('../config/db.js');

// Define the getAllType function
async function getAllType() {
    try {
        const db = await ConnectDatabase();
        return "12";
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// Export the getAllType function
module.exports = { getAllType };

// Now you can use getAllType elsewhere in your code after its definition