'use strict';

var Device = function() {};

Device.isTouchDevice = function() {
	return "ontouchstart" in window;
}

Device.isIos = function() {
	return window.navigator.userAgent.match( /iPhone|iPad|iPod/i ) !== null;
}

Device.isAndroid = function() {
	return !Device.isWindows() && window.navigator.userAgent.match( /Android/i ) !== null;
}

Device.isWindows = function() {
	return window.navigator.userAgent.match( /Windows Phone|IEMobile /i ) !== null;
}

Device.isDesktop = function() {
	return !Device.isIos() && !Device.isAndroid() && !Device.isWindows();
}

module.exports = Device;
