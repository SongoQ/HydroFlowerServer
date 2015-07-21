'use strict';

var GPIO = require("gpio");
var Config = require('../../config/config.js');

var PumpGPIO = function () {
	this.params = {};
};

PumpGPIO.prototype.start = function () {
	var gpio4 = GPIO.export(Config.pump.pin, {
		direction: 'out',
		ready: function () {

		}
	});
};

PumpGPIO.prototype.stop = function () {
	var gpio4 = GPIO.export(Config.pump.pin, {
		direction: 'in',
		ready: function () {
		}
	});

};

module.exports = new PumpGPIO();
