import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

import ArrowRight from './icons/Svg.ArrowRight';

const TouchTextIcon = props => {
  const { icon, iconSize, onPress, text, width } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onPress}
      style={[styles.container, { width }]}
    >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.icon}>
        {React.cloneElement(icon, {
          fill: colors.blue,
          size: iconSize
        })}
      </View>
    </TouchableOpacity>
  );
};

TouchTextIcon.defaultProps = {
  icon: <ArrowRight />,
  iconSize: 24,
  width: '100%'
};

TouchTextIcon.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  icon: PropTypes.element,
  iconSize: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
    width: '100%'
  },
  text: {
    alignSelf: 'center',
    fontFamily: 'HelveticaNeue-Medium',
    fontSize: 18
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
});

export default TouchTextIcon;
