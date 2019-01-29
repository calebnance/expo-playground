import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import MoreScreen from '../screens/More';
import SvgMenu from '../components/icons/Svg.Menu';

import BuildScreen from '../screens/More/Build';
import DeviceScreen from '../screens/More/Device';

const Icon = ({ focused }) => <SvgMenu active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    MoreMain: {
      screen: MoreScreen,
      navigationOptions: {
        title: 'More',
        ...navigationOptions
      }
    },
    MoreBuild: {
      screen: BuildScreen,
      navigationOptions
    },
    MoreDevice: {
      screen: DeviceScreen,
      navigationOptions
    }
  },
  {
    // initialRouteName: 'MoreDevice',
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: Icon
    }
  }
);
