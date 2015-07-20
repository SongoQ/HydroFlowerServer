'use strict';

var Util = require('util');
var Number = require('./Number.js');

var Info = function () {

};

/**
 * Get memory usage
 *
 * @returns {*}
 */
Info.prototype.memory = function () {
	return (Util.inspect(process.memoryUsage().heapUsed) / 1024 / 1024).format(2, 3);
};

/**
 * Get uptime process
 *
 * @returns {*}
 */
Info.prototype.uptime = function () {
	return process.uptime().format(2, 3);
};

module.exports = new Info();
