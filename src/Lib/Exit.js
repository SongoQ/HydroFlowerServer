"use strict";

var Messager = require('./Messager.js');
var Log = require('./Log/Log.js');

var Exit = function (hash) {
	Log.debug("User", "Exit " + hash);

	var message = {};
	message.type = 'chat-exit';

	Messager.sendMessage(message);
};

module.exports = Exit;
