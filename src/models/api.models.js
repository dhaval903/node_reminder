const fs = require('./function.models.js')
const { ConnectDatabase } = require('../config/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const ApiModels = function () {

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

ApiModels.getServicesList = async (reqBody, result) => {
    try {
        const data = await fs.getAllServices();
        result(null, data)
    }
    catch (error) {
        result(error)
    }
}

ApiModels.getProductList = async (req, result) => {
    try {
        const data = await fs.getAllProduct(req)
        result(null, data)
    }
    catch (err) {
        result(err)
    }
}

ApiModels.getUsers = async (req, result) => {
    try {
        const data = await fs.getAllUsers(req)
        result(null, data)
    }
    catch (err) {
        result(err)
    }
}

ApiModels.RegisterUser = async (req, result) => {

    const { full_name, company_name, address, email, password, mobile, mobile2, type, service_type } = req

    var enc_pass = await bcrypt.hash(password, 10)

    const currentTime = new Date();

    // Set expiry time to one year from now
    const expiryTime = new Date();
    expiryTime.setFullYear(currentTime.getFullYear() + 1);


    user = {
        full_name,
        company_name,
        address,
        email,
        "password": enc_pass,
        mobile,
        mobile2,
        type,
        service_type,
        "is_del": 0,
        "login_status": 1,
        "created_at": currentTime,
        "updated_at": currentTime,
        "expiry_time": expiryTime
    }
    try {
        const db = await ConnectDatabase();
        const collection = db.collection("tbl_user_master");
        const documents = collection.insertOne(user);

        result(null, user)
    }
    catch (error) {
        result(err)
    }
}

ApiModels.login = async (req, result) => {
    try {
        const { mobile, password } = req.body;
        const JWT_SECRET = process.env.JWT_SECRET

        const db = await ConnectDatabase();
        const collection = db.collection("tbl_user_master");

        const user = await collection.find({ is_del: 0, mobile: mobile }).toArray()
        // console.log(user)

        if (!user) {
            result(0,"user not found")
        }
        else {
            var compare_pass = await fs.comparePassword(password, user[0].password);

            if (compare_pass==0) {
                result(0,"Invalid username or password")
            }
            else {
                const users = user[0];

                const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

                const { password, ...userWithoutPassword } = users;

                var userwithtoken = {...userWithoutPassword,token}
                console.log(userwithtoken)
                result(null, {
                    data: userwithtoken,
                    status: 200,
                    message: "Logged in successfully"
                });
            }
        }

    }
    catch (err) {
        result(err)
    }
}

module.exports = ApiModels