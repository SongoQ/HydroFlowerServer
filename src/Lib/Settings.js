'use strict';

var Settings = function () {
	this.params = {};
	this.params.pump = {};
	this.params.pump.enable = false;
	this.params.pump.start = "00:00:00";
	this.params.pump.length = 0;

	this.setPumpParams = function (values) {

		if (typeof values.enable !== 'undefined') {
			if (values.enable === true) {
				this.params.pump.enable = true;
			} else {
				this.params.pump.enable = false;
			}
		}

		if (typeof values.start !== 'undefined') {
			this.params.pump.start = values.start;
		}

		if (typeof values.length !== 'undefined') {
			this.params.pump.length = values.length;
		}
	}
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
 * @param value
 */
Settings.prototype.setParams = function (value) {
	if (value['pump']) {
		this.setPumpParams(value['pump']);
	}
};

module.exports = new Settings();
