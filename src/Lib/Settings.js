'use strict';

var Settings = function () {
	this.params = {};
};

/**
 *
 * @param param
 * @returns {*}
 */
Settings.prototype.getParam = function (param) {
	return this.params[param];
};

/**
 *
 * @returns {{}|*}
 */
Settings.prototype.getParams = function () {
	return this.params;
};

/**
 *
 * @param param
 * @param value
 */
Settings.prototype.setParam = function (param, value) {
	this.params[param] = value;
};

/**
 *
 * @param value
 */
Settings.prototype.setParams = function (value) {
	this.params = value;
};

module.exports = new Settings();
