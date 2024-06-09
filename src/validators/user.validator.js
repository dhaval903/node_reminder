const {check,validationResult} = require('express-validator')

exports.validateUser  = [
    check('created_type')
    .notEmpty().withMessage('Created Type is Required')
    .isLength({max:1}),

    (req,res,next)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({ error: errors.array() });
        }

        next()
    }
]