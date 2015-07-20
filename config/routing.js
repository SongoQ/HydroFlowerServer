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

module.exports = routing;
