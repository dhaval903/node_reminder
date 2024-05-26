const {check,validationResult} = require('express-validator')

exports.validateProduct  = [
    check('created_type')
    .notEmpty().withMessage('Created Type is Required')
    .isLength({max:1}),

    (req,res,next)=>{
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        next()
    }
]