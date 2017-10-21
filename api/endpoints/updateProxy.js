var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");
var validationResultHandler = require("../validationResultHandler");
const { check } = require('express-validator/check');

/* GET proxy listing. */
var updateProxy = function(req, res, next) {
    if (!req.query._ip || !req.query._port) {
        return next("Ip address and port must be passed!")
    }
    var proxy = new Proxy(req.query._ip, req.query._port);
    delete req.query._ip;
    delete req.query._port;

    // updateQuery = buildUpdateQuery(req.query);
    performProxyUpdating(proxy, res, req.query, next);
};

let performProxyUpdating = function(proxy, res, updateQuery, next) {
    proxyPool.updateProxy(proxy, updateQuery, function(err, proxyfromDB) {
        if (err) {
            return next(err);
        }
        res.send(proxyfromDB);
    });
}

module.exports = [
    check("_ip").isIP(4),
    check("_port").isNumeric(),
    check("_active").isBoolean(),
    validationResultHandler,
    updateProxy
];