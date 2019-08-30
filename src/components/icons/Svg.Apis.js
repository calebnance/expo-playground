import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgApis = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M1.6 7.9l10 5c.1.1.2.1.4.1s.3 0 .4-.1l10-5c.4-.2.6-.5.6-.9s-.2-.7-.6-.9l-10-5c-.3-.1-.6-.1-.9 0l-10 5c-.3.2-.5.5-.5.9s.2.7.6.9zM12 3.1L19.8 7 12 10.9 4.2 7 12 3.1zM21.6 16.1L12 20.9l-9.6-4.8c-.5-.2-1.1 0-1.3.4s0 1.1.4 1.3l10 5c.2.2.3.2.5.2s.3 0 .4-.1l10-5c.5-.2.7-.8.4-1.3-.2-.5-.8-.7-1.2-.5z"
      fill={active ? colors.white : colors.brandSecondary}
    />
    <Path
      d="M21.6 11.1L12 15.9l-9.6-4.8c-.5-.2-1.1 0-1.3.4-.2.5 0 1.1.4 1.3l10 5c.2.2.3.2.5.2s.3 0 .4-.1l10-5c.5-.2.7-.8.4-1.3-.2-.5-.8-.7-1.2-.5z"
      fill={active ? colors.white : colors.brandSecondary}
    />
  </Svg>
);

SvgApis.defaultProps = {
  active: true,
  size: 24
};

SvgApis.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgApis;
