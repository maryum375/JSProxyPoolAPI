proxyPool = require("../../modules/proxy-pool");

/* GET proxy listing. */
var getProxy = function(req, res, next) {
    proxyPool.getProxy(function(err, proxy) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(proxy._address + ' returned')
        res.send(proxy);
    });
};

module.exports = getProxy;