import React from 'react';
import { ScrollView } from 'react-native';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import { device, func, gStyle } from '../../constants';

// components
import LineItem from '../../components/LineItem';

const DeviceScreen = () => {
  const formattedMemory = func.formatBytes(Device.totalMemory);

  return (
    <ScrollView style={gStyle.containerBg}>
      <LineItem
        label="Running On"
        text={Constants.isDevice ? 'Physcial Device' : 'Simulator/Emulator'}
      />
      <LineItem label="Device" text={device.iOS ? 'Apple' : 'Android'} />
      <LineItem label="Device Model" text={Device.modelName} />
      <LineItem label="Device OS Version" text={Device.osVersion} />
      <LineItem label="Device Year" text={Constants.deviceYearClass} />
      <LineItem label="Device Name" text={Constants.deviceName} />
      <LineItem
        label="Device Dimensions"
        text={`${device.height}h by ${device.width}w`}
      />
      <LineItem label="Device Memory" text={formattedMemory} />
    </ScrollView>
  );
};

export default DeviceScreen;
