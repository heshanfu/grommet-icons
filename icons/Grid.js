'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Grid' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M8,1 L8,23 M16,1 L16,23 M1,8 L23,8 M1,16 L23,16 M1,1 L23,1 L23,23 L1,23 L1,1 Z' })
  );
};

exports.default = Grid;