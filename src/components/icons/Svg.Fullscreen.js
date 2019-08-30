import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgFullscreen = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M8 20H5c-.6 0-1-.4-1-1v-3c0-.6-.4-1-1-1s-1 .4-1 1v3c0 1.7 1.3 3 3 3h3c.6 0 1-.4 1-1s-.4-1-1-1zM8 2H5C3.3 2 2 3.3 2 5v3c0 .6.4 1 1 1s1-.4 1-1V5c0-.6.4-1 1-1h3c.6 0 1-.4 1-1s-.4-1-1-1zM19 2h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1 .4 1 1v3c0 .6.4 1 1 1s1-.4 1-1V5c0-1.7-1.3-3-3-3zM21 15c-.6 0-1 .4-1 1v3c0 .6-.4 1-1 1h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3-1.3 3-3v-3c0-.6-.4-1-1-1z"
      fill={active ? colors.brandPrimary : colors.brandSecondary}
    />
  </Svg>
);

SvgFullscreen.defaultProps = {
  active: true,
  size: 24
};

SvgFullscreen.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgFullscreen;
