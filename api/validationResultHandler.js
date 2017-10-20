const { check, validationResult } = require('express-validator/check');

var validationResultHandler = function(req, res, next) {
    try {
        validationResult(req).throw();
        next();
    } catch (e) {
        res.status(422).json({ errors: e.mapped() });
    }
};

module.exports = validationResultHandler;