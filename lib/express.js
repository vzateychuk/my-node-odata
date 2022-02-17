'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (options) {
  var app = (0, _express2.default)();
  var opts = options && options.expressRequestLimit ? { limit: options.expressRequestLimit } : {};
  var corsOrigin = options && options.corsOrigin || '*';
  app.use(_bodyParser2.default.json(opts));
  opts.extended = true;
  app.use(_bodyParser2.default.urlencoded(opts));
  app.use((0, _methodOverride2.default)());
  app.use(_express2.default.query());
  app.use((0, _cors2.default)({
    origin: corsOrigin
  }));
  app.disable('x-powered-by');
  return app;
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }