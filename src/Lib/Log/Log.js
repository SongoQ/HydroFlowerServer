'use strict';

var Colors          = require('colors');
var Info            = require('../Util/Info.js');
var Config          = require('../../../config/config.js');

var Log = function(config) {
	this.log = config.log;
	this.maxLogCache = config.maxLogCache;

	this.cache = Array();

	this.addCache = function(value) {
		this.cache.push(value);
	}
};

/**
 * Debug
 *
 * @param type
 * @param message
 */
Log.prototype.debug = function (type, message) {
	if (this.log == 'Debug') {
		var date = ("[" + (new Date()).toJSON() + "] ").green;
		var type = ("[" + type + "] ").magenta;
		var up = ("[" + Info.uptime() + " s] ").grey;
		var memory = ("[" + Info.memory() + " MB] ").grey;
		var log = date + up + memory + type + message;

		this.addCache(log);
		console.log(log);
	}
}

/**
 * Notice
 *
 * @param type
 * @param message
 */
Log.prototype.notice = function (type, message) {
	if (this.log == 'Debug' || this.log == 'Notice') {

		var date = ("[" + (new Date()).toJSON() + "] ").yellow;
		var type = ("[" + type + "] ").magenta;
		var up = ("[" + Info.uptime() + " s] ").grey;
		var memory = ("[" + Info.memory() + " MB] ").grey;
		var log = date + up + memory + type + message;

		this.addCache(log);
		console.log(log);
	}
}

/**
 * Error
 *
 * @param type
 * @param message
 */
Log.prototype.error = function (type, message) {
	if (this.log == 'Debug' || this.log == 'Notice' || this.log == 'Error') {

		var date = ("[" + (new Date()).toJSON() + "] ").red;
		var type = ("[" + type + "] ").magenta;
		var up = ("[" + Info.uptime() + " s] ").grey;
		var memory = ("[" + Info.memory() + " MB] ").grey;
		var log = date + up + memory + type + message;

		this.addCache(log);
		console.log(log);
	}
}

Log.prototype.getLogs = function () {
	return this.cache;
}

module.exports = new Log(Config);
