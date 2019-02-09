import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { gStyle } from '../api/constants';

import navigationOptions from './defaultNavOptions';

import ApisScreen from '../screens/Apis';
import SvgApis from '../components/icons/Svg.Apis';

import AlertScreen from '../screens/Apis/Alert';
import BrightnessScreen from '../screens/Apis/Brightness';
import HapticScreen from '../screens/Apis/Haptic';
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
        headerStyle: gStyle.navHeaderStyle
      }
    },
    ApisAlert: {
      screen: AlertScreen,
      navigationOptions
    },
    ApisBrightness: {
      screen: BrightnessScreen,
      navigationOptions
    },
    ApisHaptic: {
      screen: HapticScreen,
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
