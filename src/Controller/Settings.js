'use strict';

var Log = require('../Lib/Log/Log.js');
var SettingsConfig = require('../Lib/Settings.js');

var Settings = function (request) {
	this.request = request;
	this.hash = request.getHash();
};

/**
 *
 * @returns {{}}
 */
Settings.prototype.fetch = function () {
	Log.notice("settings_fetch", "fetch");

	var message = {};
	message.type = "settings";
	message.value = SettingsConfig.getParams();

	return message;
};

Settings.prototype.set = function () {
	var value = this.request.getParam("value");
	Log.notice("settings_set", value);

	SettingsConfig.setParams(value);

	var message = {};
	message.type = "settings";
	message.value = SettingsConfig.getParams();

	return message;
};

module.exports = Settings;
