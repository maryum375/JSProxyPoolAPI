var express = require('express');
var router = express.Router();

var getProxy = require('./endpoints/getproxy');

/* GET proxy listing. */
router.get('/getProxy', getProxy);

module.exports = router;