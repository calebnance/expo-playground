import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgComponents = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M21.3 4.6l-8-4c-.8-.4-1.8-.4-2.7 0l-8 4C1.6 5.1 1 6.1 1 7.2v9.5c0 1.1.6 2.2 1.7 2.7l8 4c.4.2.9.3 1.3.3.5 0 .9-.1 1.3-.3l8-4c1-.5 1.7-1.5 1.7-2.7V7.2c0-1.1-.6-2.1-1.7-2.6zm-9.7-2.3c.1-.1.3-.1.4-.1.2 0 .3 0 .4.1L19.8 6 17 7.4 9.2 3.5l2.4-1.2zm.4 7.6L4.2 6 7 4.6l7.8 3.9L12 9.9zm-8.5 7.8c-.3-.2-.5-.6-.5-.9V7.6l8 4v9.8l-7.5-3.7zm16.9 0L13 21.4v-9.8l8-4v9.2c0 .4-.2.7-.6.9z"
      fill={active ? colors.white : colors.brandSecondary}
    />
  </Svg>
);

SvgComponents.defaultProps = {
  active: true,
  size: 24
};

SvgComponents.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgComponents;
