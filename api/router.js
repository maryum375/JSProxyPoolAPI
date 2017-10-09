var express = require('express');
var router = express.Router();

var getProxy = require('./endpoints/getproxy');
var reportProxyBehaviour = require('./endpoints/reportproxy');

/* GET proxy listing. */
router.get('/getProxy', getProxy);
router.get('/reportProxy', reportProxyBehaviour);

module.exports = router;