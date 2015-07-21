'use strict';

var Log = require('../Lib/Log/Log.js');

var Response = function (connection) {
	this.connection = connection;
};

Response.prototype.renderSuccess = function (params) {
	if (params) {
		this.message = {type: params.type, value: params.value};
	}
};

Response.prototype.renderException = function (value) {
	this.message = {type: "exception", value: value};
};

Response.prototype.send = function (saveLog) {
	if (this.message) {
		this.connection.sendText(JSON.stringify(this.message));

    	Log.debug("Response", JSON.stringify(this.message));
    }
};

module.exports = Response;
