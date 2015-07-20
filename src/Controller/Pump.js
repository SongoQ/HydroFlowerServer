'use strict';

var Messager = require('../Lib/Messager.js');
var Log = require('../Lib/Log/Log.js');
var gpio = require("gpio");

var Pump = function (request) {
	this.request = request;
	this.hash = request.getHash();
};

/**
 * Pump start
 */
Pump.prototype.start = function () {
	Log.debug("Pump", "start");

	var gpio4 = gpio.export(4, {
		direction: 'out',
		ready: function() {
		}
	});

	var message = {};
	message.type = "pump";
	message.value = "start ok";

	Messager.sendMessage(message);

	return;
}

/**
 * Pump stop
 */
Pump.prototype.stop = function () {
	Log.debug("Pump", "stop");

	var gpio4 = gpio.export(4, {
		direction: 'in',
		ready: function() {
		}
	});

	var message = {};
	message.type = "pump";
	message.value = "stop ok";

	Messager.sendMessage(message);

	return;
}

module.exports = Pump;
