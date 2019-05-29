import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { gStyle } from '../constants';

import navigationOptions from './defaultNavOptions';

// icons
import SvgMenu from '../components/icons/Svg.Menu';

// screens
import MoreScreen from '../screens/More';
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
        headerStyle: gStyle.navHeaderStyle
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
