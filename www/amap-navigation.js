var cordova = require('cordova');

// 这里的命令AMapNavigationPlugin与plugin.xml无关，用abc都可以，module.exports用于require('')
function AMapNavigationPlugin() {}

AMapNavigationPlugin.prototype.navigation = function (startPoint, endPoint, NavType, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "AMapNavigationPlugin", 'navigation', [startPoint.lng, startPoint.lat, endPoint.lng, endPoint.lat, NavType.toString()]);
};

module.exports = new AMapNavigationPlugin();
