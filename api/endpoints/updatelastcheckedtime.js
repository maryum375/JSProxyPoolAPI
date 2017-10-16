var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");

/* GET proxy listing. */
var reportProxy = function(req, res, next) {
    var proxy = new Proxy(req.query.ip, req.query.port);
    var lastCheckTime = parseFloat(req.query.lastCheckedTime);
    if (isNaN(lastCheckTime)) {
        next("lastCheckedTime param is not a number")
    } else {
        // TODO Error handling
        proxyPool.updateProxyLastCheckTime(proxy, lastCheckTime, function(err, proxyfromDB) {
            if (err) {
                return next(err);
            }
            res.send(proxyfromDB);
        });
    }
};

module.exports = reportProxy;