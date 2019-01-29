import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import ApisScreen from '../screens/Apis';
import SvgApis from '../components/icons/Svg.Apis';

import AlertScreen from '../screens/Apis/Alert';
import KeyboardScreen from '../screens/Apis/Keyboard';
import LinkingScreen from '../screens/Apis/Linking';
import MapViewScreen from '../screens/Apis/MapView';
import VibrationScreen from '../screens/Apis/Vibration';

const Icon = ({ focused }) => <SvgApis active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    ApisMain: {
      screen: ApisScreen,
      navigationOptions: {
        title: 'APIs',
        ...navigationOptions
      }
    },
    ApisAlert: {
      screen: AlertScreen,
      navigationOptions
    },
    ApisKeyboard: {
      screen: KeyboardScreen,
      navigationOptions
    },
    ApisLinking: {
      screen: LinkingScreen,
      navigationOptions
    },
    ApisMapView: {
      screen: MapViewScreen,
      navigationOptions
    },
    ApisVibration: {
      screen: VibrationScreen,
      navigationOptions
    }
  },
  {
    initialRouteName: 'ApisMain',
    navigationOptions: {
      tabBarLabel: 'APIs',
      tabBarIcon: Icon
    }
  }
);

// example of navigation state manipulation
// StackDownloads.navigationOptions = ({ navigation }) => {
//   const { index } = navigation.state;
//
//   return {
//     tabBarLabel: 'Downloads',
//     tabBarIcon: Icon
//   };
// };
