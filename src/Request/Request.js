'use strict';

var Log             = require('../Lib/Log/Log.js');

var Request = function(str, connection) {
	this.connection = connection;
	this.str        = str;
	this.message    = null;
	this.type       = null;
	this.value      = null;
    this.hash       = this.connection.path;
};

Request.prototype.parse = function() {
	try {
        this.message = JSON.parse(this.str);
        this.type    = this.message.type;
        this.value   = this.message.value;
    } catch (ex) {
		Log.error('Request', 'Message not parsing: ' + ex);
        throw new Error('Message not parsing');
    }
};

Request.prototype.getType = function() {
    return this.type;
};

Request.prototype.getConnection = function() {
	return this.connection;
};

Request.prototype.getHash = function() {
    return this.hash;
};

/**
 * Get param
 *
 * @param name
 * @returns {*}
 */
Request.prototype.getParam = function(name) {
	Log.debug("Request", "GET param: " + name + ", " + JSON.stringify(this.message[name]));
    return this.message[name];
}

Request.prototype.getValue = function(name) {
	Log.debug("Request", "GET value: " + name + ", " + JSON.stringify(this.value[name]));
    return this.value[name];
}

module.exports = Request;
