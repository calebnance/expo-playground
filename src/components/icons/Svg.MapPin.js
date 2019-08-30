import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgMapPin = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M12 0C6.5 0 2 4.5 2 10c0 7.4 9.1 13.6 9.4 13.8.2.1.4.2.6.2s.4-.1.6-.2c.3-.2 9.4-6.4 9.4-13.8 0-5.5-4.5-10-10-10zm0 21.8c-1.9-1.4-8-6.4-8-11.8 0-4.4 3.6-8 8-8s8 3.6 8 8c0 5.4-6.1 10.4-8 11.8z"
      fill={active ? colors.brandPrimary : colors.black}
    />
    <Path
      d="M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      fill={active ? colors.brandPrimary : colors.black}
    />
  </Svg>
);

SvgMapPin.defaultProps = {
  active: true,
  size: 24
};

SvgMapPin.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgMapPin;
