import React from 'react';
import { WebBrowser } from 'expo';
import { gStyle } from '../constants';

import TouchIcon from '../components/TouchIcon';

import SvgOpenBook from '../components/icons/Svg.OpenBook';

export default ({ navigation }) => ({
  headerStyle: gStyle.navHeaderStyle,
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
