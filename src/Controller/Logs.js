'use strict';

var Log = require('../Lib/Log/Log.js');

var Logs = function (request) {
	this.request = request;
	this.hash = request.getHash();
};

Logs.prototype.fetch = function () {
	Log.notice("Log", "fetch");

	var message = {};
	message.type = "logs";
	message.value = Log.getLogs();

	return message;
};

module.exports = Logs;
