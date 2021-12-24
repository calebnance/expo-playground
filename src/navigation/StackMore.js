import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import { gStyle } from '../constants';

// screens
import MoreScreen from '../screens/More';
import BuildScreen from '../screens/More/Build';
import DeviceScreen from '../screens/More/Device';

// components
import TouchIcon from '../components/TouchIcon';

// icons
import SvgArrowLeft from '../components/icons/Svg.ArrowLeft';
import SvgOpenBook from '../components/icons/Svg.OpenBook';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MoreMain"
      component={MoreScreen}
      options={{
        title: 'More'
      }}
    />
    <Stack.Screen
      name="MoreBuild"
      component={BuildScreen}
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
      name="MoreDevice"
      component={DeviceScreen}
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
