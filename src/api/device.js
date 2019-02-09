import { Dimensions, Platform } from 'react-native';
import { Constants } from 'expo';

// is iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;

const iOS = Platform.OS === 'ios';
let iPhoneX = false;

if (
  iOS &&
  (height === 812 || width === 812 || (height === 896 || width === 896))
) {
  // iphone screen breakdown
  // https://www.paintcodeapp.com/news/ultimate-guide-to-iphone-resolutions
  iPhoneX = true;
}

export default {
  height,
  iOS,
  iPhoneX,
  statusBarHeight: Constants.statusBarHeight,
  width
};
