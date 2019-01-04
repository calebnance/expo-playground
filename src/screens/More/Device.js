import React from 'react';
import { Dimensions, Platform, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { gStyle } from '../../api/constants';

import LineItem from '../../components/LineItem';

const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;

// console.log(Dimensions);
// console.log('-----------');
// console.log(Platform);

const Device = () => (
  <ScrollView style={gStyle.container}>
    <LineItem label="Device Name" text={Constants.deviceName} />
    <LineItem label="Device Year" text={Constants.deviceYearClass} />
    <LineItem label="Device Dimensions" text={`${height}h by ${width}w`} />
  </ScrollView>
);

export default Device;
