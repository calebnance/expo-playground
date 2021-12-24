import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import { gStyle } from '../constants';

// screens
import ApisScreen from '../screens/Apis';
import AlertScreen from '../screens/Apis/Alert';
import BrightnessScreen from '../screens/Apis/Brightness';
import HapticScreen from '../screens/Apis/Haptic';
import ImageManipulatorScreen from '../screens/Apis/ImageManipulator';
import KeyboardScreen from '../screens/Apis/Keyboard';
import LinkingScreen from '../screens/Apis/Linking';
import MapViewScreen from '../screens/Apis/MapView';
import PickerScreen from '../screens/Apis/Picker';
import SegmentedControlScreen from '../screens/Apis/SegmentedControl';
import SpeechScreen from '../screens/Apis/Speech';
import VibrationScreen from '../screens/Apis/Vibration';
import VideoScreen from '../screens/Apis/Video';

// components
import TouchIcon from '../components/TouchIcon';

// icons
import SvgArrowLeft from '../components/icons/Svg.ArrowLeft';
import SvgOpenBook from '../components/icons/Svg.OpenBook';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ApisMain"
      component={ApisScreen}
      options={{
        title: 'APIs'
      }}
    />
    <Stack.Screen
      name="ApisAlert"
      component={AlertScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisBrightness"
      component={BrightnessScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisHaptic"
      component={HapticScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisImageManipulator"
      component={ImageManipulatorScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisKeyboard"
      component={KeyboardScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisLinking"
      component={LinkingScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisMapView"
      component={MapViewScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisPicker"
      component={PickerScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisSegmentedControl"
      component={SegmentedControlScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisSpeech"
      component={SpeechScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisVibration"
      component={VibrationScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
    <Stack.Screen
      name="ApisVideo"
      component={VideoScreen}
      options={({ navigation, route }) => {
        const { title, url } = route.params;

        return {
          headerLeft: () => (
            <TouchIcon
              icon={<SvgArrowLeft />}
              onPress={() => {
                navigation.goBack();
              }}
              style={gStyle.navHeaderLeftIconStyle}
            />
          ),
          headerRight: () => (
            <TouchIcon
              icon={<SvgOpenBook />}
              onPress={() => {
                WebBrowser.openBrowserAsync(url);
              }}
              style={gStyle.navHeaderRightIconStyle}
            />
          ),
          title
        };
      }}
    />
  </Stack.Navigator>
);
