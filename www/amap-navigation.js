var cordova = require('cordova');

// 这里的命令AMapNavigation与plugin.xml无关，用abc都可以，module.exports用于require('')
function AMapNavigation() {}

AMapNavigation.prototype.navigation = function (startPoint, endPoint, NavType, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AMapNavigationPlugin", 'navigation', [startPoint.lng, startPoint.lat, endPoint.lng, endPoint.lat, NavType.toString()]);
};

module.exports = new AMapNavigation();
