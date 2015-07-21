var routing = {};

routing.pump_start                   = {};
routing.pump_start.controller        = 'start';
routing.pump_start.class             = 'Pump.js';

routing.pump_stop                    = {};
routing.pump_stop.controller         = 'stop';
routing.pump_stop.class              = 'Pump.js';

routing.logs                         = {};
routing.logs.controller              = 'fetch';
routing.logs.class                   = 'Logs.js';

routing.settings_fetch               = {};
routing.settings_fetch.controller    = 'fetch';
routing.settings_fetch.class         = 'Settings.js';

routing.settings_set                 = {};
routing.settings_set.controller      = 'set';
routing.settings_set.class           = 'Settings.js';

module.exports = routing;
