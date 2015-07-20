'use strict';

var Log = require('../Lib/Log/Log.js');

var Router = function (request, routing) {
	this.request = request;
	this.routing = routing;
	this.class = null;
	this.controller = null;

	var route = this.request.getType().toLowerCase();

	if (routing[route]) {
		this.class = require('../Controller/' + routing[route].class);
		this.controller = routing[route].controller;
	} else {
		Log.error("Router", 'Message type ' + route + ' does not exist');
		throw new Error('Message type ' + route + ' does not exist');
	}
};

Router.prototype.getController = function () {
	var object = new this.class(this.request);
	return object[this.controller]();
};

module.exports = Router;
