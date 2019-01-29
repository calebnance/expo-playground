import React from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { device, gStyle } from '../../api/constants';

import LineItem from '../../components/LineItem';

const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;

const Device = () => (
  <ScrollView style={gStyle.container}>
    <LineItem label="Device" text={device.iOS ? 'Apple' : 'Android'} />
    <LineItem
      label="Running On"
      text={Constants.isDevice ? 'Physcial Device' : 'Simulator/Emulator'}
    />
    <LineItem label="Device Name" text={Constants.deviceName} />
    <LineItem label="Device Year" text={Constants.deviceYearClass} />
    <LineItem label="Device Dimensions" text={`${height}h by ${width}w`} />
  </ScrollView>
);

export default Device;
