var express = require('express');
var router = express.Router();

var getProxy = require('./endpoints/getproxy');
var getproxies = require('./endpoints/getproxies');
var updateProxy = require('./endpoints/updateProxy');
var addProxy = require('./endpoints/addProxy');

/* GET proxy listing. */
router.route('/getProxy').get(getProxy);
router.route('/getProxies').get(getproxies);
router.route('/updateProxy').get(updateProxy);
router.route('/addProxy').get(addProxy);

module.exports = router;