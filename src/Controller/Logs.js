'use strict';

var Messager = require('../Lib/Messager.js');
var Log = require('../Lib/Log/Log.js');

var Logs = function (request) {
	this.request = request;
	this.hash = request.getHash();
};

Logs.prototype.fetch = function () {
	Log.debug("Log", "getLogs");

	var message = {};
	message.type = "logs";
	message.value = Log.getLogs();

	Messager.sendMessage(message);

	return;
}

module.exports = Logs;
