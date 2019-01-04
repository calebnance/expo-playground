import { Dimensions, Platform } from 'react-native';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;

let iPhoneX = false;
if (
  Platform.OS === 'ios' &&
  (height === 812 || width === 812 || (height === 896 || width === 896))
) {
  // iphone screen breakdown
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  iPhoneX = true;
}

export default {
  height,
  iPhoneX,
  width
};
