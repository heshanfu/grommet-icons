'use strict';

exports.__esModule = true;
exports.Visa = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledIcon = require('../StyledIcon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Visa = exports.Visa = function Visa(props) {
  return _react2.default.createElement(
    _StyledIcon.StyledIcon,
    _extends({ viewBox: '0 0 24 24', a11yTitle: 'Visa' }, props),
    _react2.default.createElement('path', { fill: '#1A1F71', fillRule: 'evenodd', d: 'M5.75604904,6.3421103 C4.34405863,5.55921989 2.73289927,4.92988052 0.93115208,4.49372953 L0.98977571,4.14310685 L8.39658295,4.14310685 C9.39421768,4.18029541 10.2006584,4.49872244 10.4787118,5.56582745 L12.0890953,13.309165 C12.0891819,13.3094435 12.0892685,13.3097219 12.0893551,13.3100003 L12.5685021,15.6453901 L17.065563,4.15352309 L21.9311521,4.15352309 L14.6996992,20.9731676 L9.8397917,20.9787631 L5.75604904,6.3421103 L5.75604904,6.3421103 Z' })
  );
};