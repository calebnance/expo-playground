import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

const LineItem = props => {
  const { label, text } = props;

  return (
    <View style={styles.lineItem}>
      <Text style={styles.label}>{`${label}:`}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

LineItem.propTypes = {
  // required
  label: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
};

const styles = StyleSheet.create({
  lineItem: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  label: {
    fontFamily: 'HelveticaNeue-Bold'
  },
  text: {
    fontFamily: 'HelveticaNeue-Medium'
  }
});

export default LineItem;
