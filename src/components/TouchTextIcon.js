import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts } from '../constants';

// icons
import ArrowRight from './icons/Svg.ArrowRight';

const TouchTextIcon = ({ icon, iconSize, onPress, text, textMuted, width }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.container, { width }]}
  >
    <View style={styles.containerText}>
      <Text style={styles.text}>{text}</Text>
      {textMuted && <Text style={styles.textMuted}>{textMuted}</Text>}
    </View>
    <View style={styles.icon}>
      {React.cloneElement(icon, {
        fill: colors.blue,
        size: iconSize
      })}
    </View>
  </TouchableOpacity>
);

TouchTextIcon.defaultProps = {
  icon: <ArrowRight />,
  iconSize: 24,
  textMuted: null,
  width: '100%'
};

TouchTextIcon.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  icon: PropTypes.element,
  iconSize: PropTypes.number,
  textMuted: PropTypes.string,
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
  containerText: {
    flexDirection: 'row'
  },
  text: {
    alignSelf: 'center',
    fontFamily: fonts.medium,
    fontSize: 18
  },
  textMuted: {
    alignSelf: 'center',
    color: colors.midGrey,
    fontFamily: fonts.medium,
    fontSize: 18
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'flex-end'
  }
});

export default TouchTextIcon;
