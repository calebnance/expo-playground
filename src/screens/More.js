import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { gStyle } from '../constants';

// components
import TouchTextIcon from '../components/TouchTextIcon';

const More = ({ navigation }) => (
  <View style={gStyle.container}>
    <TouchTextIcon
      onPress={() =>
        navigation.navigate('MoreBuild', {
          title: 'Build',
          url: 'https://docs.expo.io/versions/latest/sdk/constants'
        })
      }
      text="Build Information"
    />
    <TouchTextIcon
      onPress={() =>
        navigation.navigate('MoreDevice', {
          title: 'Device',
          url: 'https://docs.expo.io/versions/latest/sdk/constants'
        })
      }
      text="Device Information"
    />
  </View>
);

More.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default More;
