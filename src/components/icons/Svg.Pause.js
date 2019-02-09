import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgPause = props => {
  const { fill, size } = props;

  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Svg.Path
        d="M10 3H6c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zM9 19H7V5h2v14zM18 3h-4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-1 16h-2V5h2v14z"
        fill={fill}
      />
    </Svg>
  );
};

SvgPause.defaultProps = {
  fill: colors.brandPrimary,
  size: 24
};

SvgPause.propTypes = {
  // optional
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

export default SvgPause;
