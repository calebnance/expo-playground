import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgSave = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M21.7 7.3l-5-5c-.2-.2-.4-.3-.7-.3H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V8c0-.3-.1-.5-.3-.7zM16 20H8v-6h8v6zm4-1c0 .6-.4 1-1 1h-1v-7c0-.6-.4-1-1-1H7c-.6 0-1 .4-1 1v7H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h1v4c0 .6.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H8V4h7.6L20 8.4V19z"
      fill={fill}
    />
  </Svg>
);

SvgSave.defaultProps = {
  fill: colors.brandPrimary,
  size: 24
};

SvgSave.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgSave;
