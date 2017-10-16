var express = require('express');
var router = express.Router();

var getProxy = require('./endpoints/getproxy');
var getproxies = require('./endpoints/getproxies');
var reportProxyBehaviour = require('./endpoints/reportProxy');
var updateLastCheckedTime = require('./endpoints/updatelastcheckedtime');
var addProxy = require('./endpoints/addProxy');

/* GET proxy listing. */
router.get('/getProxy', getProxy);
router.get('/getProxies', getproxies);
router.get('/reportProxy', reportProxyBehaviour);
router.get('/addProxy', addProxy);
router.get('/updateLastCheckedTime', updateLastCheckedTime);

module.exports = router;