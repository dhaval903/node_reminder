const ApiModels = require("../models/api.models.js")

exports.getType = async (req, res) => {
    ApiModels.getTypeList(req.body, (err, result) => {
        if (err) {
            const result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else {
            const result_data = {
                data: result,
                status: 200,
                message: "Data Retrieved successfully"
            }
            res.send(result_data)
        }
    })
}

exports.getServices = async (req, res) => {
    ApiModels.getServicesList(req.body, (err, result) => {
        if (err) {
            const result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else {
            const result_data = {
                data: result,
                status: 200,
                message: "Data Retrieved successfully"
            }
            res.send(result_data)
        }
    })
}

exports.getProducts = async (req, res) => {

    ApiModels.getProductList(req.body, (err, result) => {
        if (err) {
            var result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }
            res.status(500).send(result_data)
        }
        else {
            // console.log(result.length)
            // console.log(result)
            if (result.length > 0) {
                var result_data = {
                    data: result,
                    status: 200,
                    message: "Data Retrieved successfully"
                }
            }
            else {
                var result_data = {
                    data: [],
                    status: 201,
                    message: "No Data Found"
                }
            }

            res.send(result_data)

        }
    })
}

exports.getUsersList = async (req, res) => {
    ApiModels.getUsers(req.body, (err, result) => {
        if (err) {
            const result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }

            res.send(result_data)
        }
        else {
            const result_data = {
                data: result,
                status: 200,
                message: "Data Retrieved successfully"
            }

            res.send(result_data)
        }
    })
}

exports.registerUser = async (req, res) => {

    ApiModels.RegisterUser(req.body, (err, result) => {
        // console.log(req.body)

        if (err) {
            var result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }

            res.send(result_data)
        }
        else {
            var result_data = {
                data: result,
                status: 200,
                message: "Data Inserted successfully"
            }

            res.send(result_data)
        }


    })
}

exports.login = async (req, res) => {

    const mobile = req.body.mobile;
    const password = req.body.password;


    ApiModels.login(req, (err, result) => {

        console.log(req.body);
        // console.log(err)
        // console.log(result)
        if (err) {
            var result_data = {
                data: "",
                status: 500,
                message: err.message || "Some error occurred while retrieving data."
            }

            res.send(result_data)
        }
        else {
            if (err == 0) {

                var result_data = {
                    data: "",
                    status: 400,
                    message: result
                }

                res.send(result_data)
            }
            else {

                res.status(result.status).send(result);

            }
        }
    })
    // console.log(req.body)

}