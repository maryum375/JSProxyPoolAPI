var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");
var validationResultHandler = require("../validationResultHandler");
const { check } = require('express-validator/check');

/* GET proxy listing. */
var updateProxy = function(req, res, next) {
    if (!req.body._ip || !req.body._port) {
        return next("Ip address and port must be passed!")
    }
    var proxy = new Proxy(req.body._ip, req.body._port);
    delete req.body._ip;
    delete req.body._port;

    // updateQuery = buildUpdateQuery(req.query);
    performProxyUpdating(proxy, res, req.body, next);
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