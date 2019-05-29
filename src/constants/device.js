import { Dimensions, Platform } from 'react-native';
import { Constants } from 'expo';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const iOS = Platform.OS === 'ios';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;

// is iPad
const { isPad } = Platform;

let iPhoneX = false;
if (iOS) {
  // iphone screen breakdown
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  // http://iosres.com
  if (height === 812 || width === 812 || (height === 896 || width === 896)) {
    iPhoneX = true;
  }
}

export default {
  aspectRatio,
  height,
  iOS,
  iPhoneX,
  isPad,
  statusBarHeight: Constants.statusBarHeight,
  width
};
