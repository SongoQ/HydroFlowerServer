'use strict';

var Messager = require('../Lib/Messager.js');
var Log = require('../Lib/Log/Log.js');
var PumpGPIO = require('../Lib/PumpGPIO.js');

var Pump = function (request) {
	this.request = request;
	this.hash = request.getHash();
};

/**
 * Pump start
 */
Pump.prototype.start = function () {
	Log.notice("Pump", "start");

	PumpGPIO.start();

	var message = {};
	message.type = "pump";
	message.value = "start ok";

	Messager.sendMessage(message);
	return;
};

/**
 * Pump stop
 */
Pump.prototype.stop = function () {
	Log.notice("Pump", "stop");

	PumpGPIO.stop();

	var message = {};
	message.type = "pump";
	message.value = "stop ok";

	Messager.sendMessage(message);
	return;
};

module.exports = Pump;
