import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgLoop = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M3 12c.6 0 1-.4 1-1V9c0-1.7 1.3-3 3-3h11.6l-2.3 2.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l4-4c.1-.1.2-.2.2-.3.1-.2.1-.5 0-.8-.1-.1-.1-.2-.2-.3l-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L18.6 4H7C4.2 4 2 6.2 2 9v2c0 .6.4 1 1 1zM21 12c-.6 0-1 .4-1 1v2c0 1.7-1.3 3-3 3H5.4l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4 4c-.1.1-.2.2-.2.3-.1.2-.1.5 0 .8.1.1.1.2.2.3l4 4c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.4 20H17c2.8 0 5-2.2 5-5v-2c0-.6-.4-1-1-1z"
      fill={fill}
    />
  </Svg>
);

SvgLoop.defaultProps = {
  fill: colors.brandPrimary,
  size: 24
};

SvgLoop.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgLoop;
