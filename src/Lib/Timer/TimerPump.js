'use strict';

var Settings = require('../Settings.js');
var Messager = require('../Messager.js');
var PumpGPIO = require('../PumpGPIO.js');
var DateFormat = require('dateformat');

var TimerPump = function () {
	this.i = 0;
	this.counter = 0;
	this.internalPumpStop = null;
};

/**
 *
 */
TimerPump.prototype.run = function () {
	var that = this;
	var intervalStart = setInterval(that.timerPumpStart, 1000, that);
};

/**
 *
 * @param that
 */
TimerPump.prototype.timerPumpStart = function (that) {
	var timeFormat = DateFormat(new Date(), "hh:MM:ss");

	if (Settings.getParam("pump").enable && Settings.getParam("pump").start == timeFormat) {
		PumpGPIO.start();

		var message = {};
		message.type = "pump_timer";
		message.value = "start";
		Messager.sendMessage(message);

		that.internalPumpStop = setInterval(that.timerPumpStop, 1000, that);
	}
};

/**
 *
 * @param that
 */
TimerPump.prototype.timerPumpStop = function (that) {
	that.counter++;

	if (Settings.getParam("pump").enable && that.counter == Settings.getParam("pump").length) {
		clearInterval(that.internalPumpStop);
		this.counter = 0;

		PumpGPIO.stop();

		var message = {};
		message.type = "pump_timer";
		message.value = "stop";
		Messager.sendMessage(message);
	}
};

module.exports = new TimerPump();
