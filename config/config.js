var config = {};

config.port = 3333;
config.processName = "Hydro Flawer";

// Logs
config.logs = {};
config.logs.output = {};
config.logs.output.level = "Debug"; // Debug, Notice, Error, None

config.logs.cache = {};
config.logs.cache.level = "Notice"; // Debug, Notice, Error, None
config.logs.cache.maxLine = 30;

// Default settings
config.settings = {};
config.settings.pump = {};
config.settings.pump.enable = true;
config.settings.pump.start = "21:00:00";
config.settings.pump.length = 15;

// pump
config.pump = {};
config.pump.pin = 4;

module.exports = config;
