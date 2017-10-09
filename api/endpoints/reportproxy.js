var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");

/* GET proxy listing. */
var reportProxy = function(req, res, next) {
    var proxy = new Proxy(req.query.ip, req.query.port);
    var active = (req.query.active == 'true');
    // TODO Error handling
    proxyPool.reportProxyActivity(proxy, active);
    res.send("Done");
};

module.exports = reportProxy;