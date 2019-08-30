import React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { gStyle } from '../../constants';

// components
import LineItem from '../../components/LineItem';

const Build = () => (
  <ScrollView style={gStyle.container}>
    <LineItem label="Expo Version" text={Constants.expoVersion} />
    <LineItem label="Expo SDK" text={Constants.manifest.sdkVersion} />
    <LineItem
      label="Orientation"
      text={Constants.manifest.orientation.toUpperCase()}
    />
    <LineItem label="Current App Version" text={Constants.manifest.version} />
  </ScrollView>
);

export default Build;
