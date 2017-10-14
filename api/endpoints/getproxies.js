proxyPool = require("../../modules/proxy-pool");

/* GET proxy listing. */
var getProxy = function(req, res, next) {
    proxyPool.getProxies(10, function(err, proxies) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(proxies);
    });
};

module.exports = getProxy;