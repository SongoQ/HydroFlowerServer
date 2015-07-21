'use strict';

var Response = require('../Response/Response.js');
var Log = require('./Log/Log.js');

var Messager = function () {

};

/**
 * Send message to user
 *
 * @param message
 */
Messager.prototype.sendMessage = function (message) {
	Log.notice("Messager", JSON.stringify(message));

	server.connections.forEach(function (connection) {
		var response = new Response(connection);
		response.renderSuccess(message);
		response.send();
	});
};

module.exports = new Messager();
