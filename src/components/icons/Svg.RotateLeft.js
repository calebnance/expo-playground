import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgRotateLeft = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M20 3h-7c-2.8 0-5 2.2-5 5v9.6l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5c.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1c.1-.1.2-.1.3-.2l5-5c.4-.4.4-1 0-1.4s-1-.4-1.4 0L10 17.6V8c0-1.7 1.3-3 3-3h7c.6 0 1-.4 1-1s-.4-1-1-1z"
      fill={fill}
    />
  </Svg>
);

SvgRotateLeft.defaultProps = {
  fill: colors.white,
  size: 24
};

SvgRotateLeft.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgRotateLeft;
