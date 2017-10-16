var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");

/* GET proxy listing. */
var updateProxy = function(req, res, next) {
    var proxy = new Proxy(req.query.ip, req.query.port);

    updateQuery = buildUpdateQuery(req.query);

    // TODO Error handling
    proxyPool.updateProxy(proxy, updateQuery);
    res.send("Done");
};


let buildUpdateQuery = function(reqQuery) {
    updateQuery = {}

    if (reqQuery.active) {
        updateQuery._active = (reqQuery.active == 'true');
    }

    if (reqQuery.lastCheckedTime) {
        var lastCheckedTime = validateLastCheckedTimeInput(reqQuery.lastCheckedTime);
        updateQuery._lastCheckedTime = lastCheckedTime;
    }
}

let validateActivityInput = function(active) {
    return (req.query.active == 'true');
}

let validateLastCheckedTimeInput = function() {

    var lastCheckTime = parseFloat(lastCheckedTime);
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
}

module.exports = updateProxy;