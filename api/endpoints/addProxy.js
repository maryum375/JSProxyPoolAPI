var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");

/* GET proxy listing. */
var reportProxy = function(req, res, next) {
    var proxy = new Proxy(req.query.ip, req.query.port);
    // TODO Error handling
    proxyPool.addProxy(proxy, function(error, proxy) {
        if (error) {
            next(error.message);
        }
        res.send(proxy);
    });
};

module.exports = reportProxy;