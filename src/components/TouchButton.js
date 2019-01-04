import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

const TouchButton = props => {
  const { btnStyle, btnTextStyle, onPress, text, width } = props;

  const container = StyleSheet.flatten([gStyle.btn, btnStyle, { width }]);
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
  width: 260
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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TouchButton;
