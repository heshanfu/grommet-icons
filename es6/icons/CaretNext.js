var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CaretNext = function CaretNext(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CaretNext' }, props),
    React.createElement('polygon', { fill: 'none', stroke: '#000', strokeWidth: '2', points: '6 2 18 12 6 22' })
  );
};

export default CaretNext;