var express = require('express');
var router = express.Router();

var getProxy = require('./endpoints/getproxy');
var getproxies = require('./endpoints/getproxies');
var reportProxyBehaviour = require('./endpoints/reportProxy');
var addProxy = require('./endpoints/addProxy');

/* GET proxy listing. */
router.get('/getProxy', getProxy);
router.get('/getProxies', getproxies);
router.get('/reportProxy', reportProxyBehaviour);
router.get('/addProxy', addProxy);

module.exports = router;