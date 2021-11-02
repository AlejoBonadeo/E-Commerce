const { validationResult } = require("express-validator")

const validateForm = () => (req, res, next) => {

    const errors = validationResult( req )
    if( !errors.isEmpty()) {
        return res.render('./user/register', { error: errors.array()[0].msg })
    }

    next()
}

module.exports = validateForm