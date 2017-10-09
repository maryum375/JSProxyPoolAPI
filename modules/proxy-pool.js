var jsProxyPool = require("proxy-pool");
var config = require('../config');

var proxypoolDb = new jsProxyPool.MongoAccess(config.dbConnectionString, config.proxiesCollectionName);
var proxyPoolConfiguration = new jsProxyPool.ProxyPoolConfiguration(proxypoolDb, 0);
var proxyPool = new jsProxyPool.ProxyPool(proxyPoolConfiguration);

module.exports = proxyPool;