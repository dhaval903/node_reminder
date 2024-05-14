const ApiModels = require("../models/api.models.js")

exports.getType = async (req, res) => {
    ApiModels.getTypeList(req.body,(err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving type."
            })
        }
        else{
            res.send(data)
        }
    })
}