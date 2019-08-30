import React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { device, gStyle } from '../../constants';

// components
import LineItem from '../../components/LineItem';

const Device = () => (
  <ScrollView style={gStyle.container}>
    <LineItem label="Device" text={device.iOS ? 'Apple' : 'Android'} />
    <LineItem
      label="Running On"
      text={Constants.isDevice ? 'Physcial Device' : 'Simulator/Emulator'}
    />
    <LineItem label="Device Name" text={Constants.deviceName} />
    <LineItem label="Device Year" text={Constants.deviceYearClass} />
    <LineItem
      label="Device Dimensions"
      text={`${device.height}h by ${device.width}w`}
    />
  </ScrollView>
);

export default Device;
