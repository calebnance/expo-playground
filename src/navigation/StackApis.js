import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import navigationOptions from './defaultNavOptions';

// icons
import SvgApis from '../components/icons/Svg.Apis';

// screens
import ApisScreen from '../screens/Apis';
import AlertScreen from '../screens/Apis/Alert';
import BrightnessScreen from '../screens/Apis/Brightness';
import HapticScreen from '../screens/Apis/Haptic';
import ImageManipulatorScreen from '../screens/Apis/ImageManipulator';
import KeyboardScreen from '../screens/Apis/Keyboard';
import LinkingScreen from '../screens/Apis/Linking';
import MapViewScreen from '../screens/Apis/MapView';
import VibrationScreen from '../screens/Apis/Vibration';
import VideoScreen from '../screens/Apis/Video';

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
        title: 'APIs'
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
    ApisImageManipulator: {
      screen: ImageManipulatorScreen,
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
    },
    ApisVideo: {
      screen: VideoScreen,
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
