import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { gStyle } from '../constants';

// components
import TouchIcon from '../components/TouchIcon';

// icons
import SvgOpenBook from '../components/icons/Svg.OpenBook';

export default ({ navigation }) => ({
  headerRight: (
    <TouchIcon
      icon={<SvgOpenBook />}
      onPress={() =>
        WebBrowser.openBrowserAsync(
          navigation.getParam('url', 'https://expo.io')
        )
      }
      style={gStyle.navHeaderRightIconStyle}
    />
  ),
  title: navigation.getParam('title', null)
});
