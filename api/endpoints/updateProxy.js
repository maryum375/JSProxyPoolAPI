var proxyPool = require("../../modules/proxy-pool");
var Proxy = require("../../modules/proxy");

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


// let buildUpdateQuery = function(reqQuery) {
//     updateQuery = {}

//     // Contains the parameters and the validators for them
//     let validations = {
//         active: { validator: validateActivityInput, queryParamName: "_active" },
//         lastCheckedTime: { validator: validateTimeInputParameter, queryParamName: "_lastCheckedTime" },
//         active: { validator: validateActivityInput, queryParamName: "_active" },
//         active: { validator: validateActivityInput, queryParamName: "_active" },
//     }

//     if (reqQuery.active) {
//         validateActivityInput(reqQuery.active, function(active) {
//             updateQuery._active = active
//         })
//     }


//     timeParamsNames = ["lastCheckedTime", "lastUsedTime"]
//     for (var paramNameIndex = 0; paramNameIndex < timeParamsNames.length; paramNameIndex++) {
//         let curParamName = timeParamsNames[paramNameIndex];
//         validateTimeInputParameter(reqQuery[curParamName], function(err, formattedParamValue) {
//             if (err) {
//                 return next(err)
//             }
//             updateQuery["_" + curParamName] = formattedParamValue;
//         })
//     }


//     if (reqQuery.speed) {
//         validateSpeedInput(reqQuery.speed, function(active) {
//             updateQuery._speed = active
//         })
//     }


//     performProxyUpdating(res, next);
// }

// let validateActivityInput = function(active, callback) {
//     callback(req.query.active == 'true')
// }

// let validateSpeedInput = function(speed, callback) {
//     let isValid = !isNaN(speed)
//     callback(isValid)
// }

// let validateTimeInputParameter = function(timeParam, callback) {
//     if (timeParam) {
//         validateTimeInput(timeParam, function(err, lastCheckedTime) {});
//     }
// }

// let validateTimeInput = function(timeInput, callback) {

//     var formattedTimeInput = parseFloat(timeInput);
//     if (isNaN(formattedTimeInput)) {
//         callback("parameter should be a number. '" + timeInput + "' given")
//     } else if (formattedTimeInput > Date.now()) {
//         callback("time parameter should be in the past. '" + timeInput + "' given")
//     } else {
//         callback(null, formattedTimeInput)
//     }
// }

let performProxyUpdating = function(proxy, res, updateQuery, next) {
    proxyPool.updateProxy(proxy, updateQuery, function(err, proxyfromDB) {
        if (err) {
            return next(err);
        }
        res.send(proxyfromDB);
    });
}

module.exports = updateProxy;