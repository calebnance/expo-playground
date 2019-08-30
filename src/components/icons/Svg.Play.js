import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgPlay = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M19.5 11.2l-14-9c-.3-.2-.7-.2-1 0-.3.1-.5.4-.5.8v18c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.5-.2l14-9c.3-.2.5-.5.5-.8s-.2-.7-.5-.8zM6 19.2V4.8L17.2 12 6 19.2z"
      fill={fill}
    />
  </Svg>
);

SvgPlay.defaultProps = {
  fill: colors.brandPrimary,
  size: 24
};

SvgPlay.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgPlay;
