var config                   = {};

config.port                  = 3333;
config.processName           = "Hydro Flawer";

// Logs
config.logs                  = {};
config.logs.output           = {};
config.logs.output.level     = "Debug"; // Debug, Notice, Error, None

config.logs.cache            = {};
config.logs.cache.level      = "Notice"; // Debug, Notice, Error, None
config.logs.cache.maxLine    = 30;

module.exports = config;
