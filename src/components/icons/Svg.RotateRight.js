import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgRotateRight = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M20.7 14.3c-.4-.4-1-.4-1.4 0L16 17.6V8c0-2.8-2.2-5-5-5H4c-.6 0-1 .4-1 1s.4 1 1 1h7c1.7 0 3 1.3 3 3v9.6l-3.3-3.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5 5c.1.1.2.2.3.2.1.1.3.1.4.1s.3 0 .4-.1c.1-.1.2-.1.3-.2l5-5c.4-.4.4-1 0-1.4z"
      fill={fill}
    />
  </Svg>
);

SvgRotateRight.defaultProps = {
  fill: colors.white,
  size: 24
};

SvgRotateRight.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgRotateRight;
