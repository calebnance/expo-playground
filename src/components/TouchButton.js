import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

const TouchButton = ({ btnStyle, btnTextStyle, onPress, text, minWidth }) => {
  const container = StyleSheet.flatten([gStyle.btn, btnStyle, { minWidth }]);
  const textStyle = StyleSheet.flatten([gStyle.btnText, btnTextStyle]);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={container}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

TouchButton.defaultProps = {
  btnStyle: {},
  btnTextStyle: {},
  minWidth: 220
};

TouchButton.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  btnStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  btnTextStyle: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TouchButton;
