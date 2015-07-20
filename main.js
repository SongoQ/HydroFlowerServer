"use strict";

var ws              = require("nodejs-websocket");
var routing         = require('./config/routing.js');
var Request         = require('./src/Request/Request.js');
var Router          = require('./src/Router/Router.js');
var Response        = require('./src/Response/Response.js');
var Exit            = require('./src/Lib/Exit.js');
var Log             = require('./src/Lib/Log/Log.js');
var Messager        = require('./src/Lib/Messager.js');

global.config       = require('./config/config.js');
process.title       = config.processName;

/**
 * Exit process list
 */
['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS',
	'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(function(element, index, array) {
	process.on(element, function() {
		Log.error("System", "Node server stopped: " + element);
		process.exit(1);
	});
});

/**
 * Exception process
 */
process.on('uncaughtException', function(err) {
	Log.error("System", "Caught exception: " + err);
});

/**
 * Start process
 */
Log.notice("System", "Start process " + config.processName);

global.server = ws.createServer(function (connection) {
	Log.debug("Connection", "Channel connect: " + connection.path);

	var message = {};
	message.type = "connection";
	message.value = "ok";

	Messager.sendMessage(message);

	connection.on("text", function(str) {
		var request  = new Request(str, connection);
		var response = new Response(connection);

		try {
			request.parse();

			var router = new Router(request, routing);
            response.renderSuccess(router.getController());

		} catch(ex) {
            response.renderException(ex.message);
		}

        response.send();
	});

	connection.on("close", function() {
        new Exit(connection.path);
	});
});

server.listen(config.port);
