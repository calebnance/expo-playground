import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgOpenBook = ({ fill, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M22 2h-6c-1.6 0-3.1.8-4 2-.9-1.2-2.4-2-4-2H2c-.6 0-1 .4-1 1v15c0 .6.4 1 1 1h7c1.1 0 2 .9 2 2 0 .6.4 1 1 1s1-.4 1-1c0-1.1.9-2 2-2h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM11 17.5c-.6-.3-1.3-.5-2-.5H3V4h5c1.7 0 3 1.3 3 3v10.5zm10-.5h-6c-.7 0-1.4.2-2 .5V7c0-1.7 1.3-3 3-3h5v13z"
      fill={fill}
    />
  </Svg>
);

SvgOpenBook.defaultProps = {
  fill: colors.black,
  size: 24
};

SvgOpenBook.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgOpenBook;
