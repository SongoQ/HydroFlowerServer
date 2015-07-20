'use strict';

var Colors, Info, Config;

Colors = require('colors');
Info = require('../Util/Info.js');
Config = require('../../../config/config.js');

var Log;
Log = function (config) {
	this.logs = config.logs;
	this.cache = [];

	/**
	 *
	 * @param value
	 */
	this.addCache = function (value) {
		if (value.message.type != 'logs') {
			this.cache.unshift(value);

			if(this.cache.length > this.logs.cache.maxLine) {
				this.cache.shift();
			}
		}
	};

	/**
	 *
	 * @param level
	 * @param type
	 * @param message
	 * @returns {{date: string, level: *, type: *, uptime: *, memory: *, message: *}}
	 */
	this.getLog = function (level, type, message) {
		try {
			message = JSON.parse(message);
		} catch (ex) {
		}

		return {
			date: (new Date()).toJSON(), level: level, type: type,
			uptime: Info.uptime(), memory: Info.memory(), message: message,
		};
	};

	/**
	 *
	 * @param log
	 * @returns {*}
	 */
	this.logFormat = function (log) {
		var date;

		if (log.level == "Debug") {
			date = ("[" + log.date + "] ").green;
		} else if (log.level == "Notice") {
			date = ("[" + log.date + "] ").yellow;
		} else {
			date = ("[" + log.date + "] ").red;
		}

		var type = ("[" + log.type + "] ").magenta;
		var uptime = ("[" + log.uptime + " s] ").grey;
		var memory = ("[" + log.memory + " MB] ").grey;
		var level = ("[" + log.level + "] ").grey;

		return date + uptime + memory + level + type + JSON.stringify(log.message);
	}
};

/**
 * Debug
 *
 * @param messagetype
 * @param message
 */
Log.prototype.debug = function (messagetype, message) {
	var log = this.getLog('Debug', messagetype, message);

	if (this.logs.output.level == 'Debug') {
		console.log(this.logFormat(log));
	}

	if (this.logs.cache.level == 'Debug') {
		this.addCache(log);
	}
};

/**
 * Notice
 *
 * @param messagetype
 * @param message
 */
Log.prototype.notice = function (messagetype, message) {
	var log = this.getLog('Notice', messagetype, message);

	if (this.logs.output.level == 'Debug' || this.logs.output.level == 'Notice') {
		console.log(this.logFormat(log));
	}

	if (this.logs.cache.level == 'Debug' || this.logs.cache.level == 'Notice') {
		this.addCache(log);
	}
};

/**
 * Error
 *
 * @param messagetype
 * @param message
 */
Log.prototype.error = function (messagetype, message) {
	var log = this.getLog('Error', messagetype, message);

	if (this.logs.output.level == 'Debug' || this.logs.output.level == 'Notice' || this.logs.output.level == 'Error') {
		console.log(this.logFormat(log));
	}

	if (this.logs.cache.level == 'Debug' || this.logs.cache.level == 'Notice' || this.logs.cache.level == 'Error') {
		this.addCache(log);
	}
};

Log.prototype.getLogs = function () {
	return this.cache;
};

module.exports = new Log(Config);
