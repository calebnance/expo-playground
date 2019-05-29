import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../constants';

const TouchIcon = ({ icon, iconColor, iconSize, style, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.container, style]}
  >
    {React.cloneElement(icon, {
      fill: iconColor,
      size: iconSize
    })}
  </TouchableOpacity>
);

TouchIcon.defaultProps = {
  iconColor: colors.black,
  iconSize: 24,
  style: {}
};

TouchIcon.propTypes = {
  // required
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,

  // optional
  iconColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.brandPrimary,
    borderWidth: 1,
    padding: 16
  }
});

export default TouchIcon;
