import React from 'react';
import { TouchableOpacity } from 'react-native';
import { WebBrowser } from 'expo';
import { colors } from '../api/constants';

import SvgOpenBook from '../components/icons/Svg.OpenBook';

export default ({ navigation }) => ({
  headerStyle: {
    backgroundColor: colors.white
  },
  headerRight: (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        WebBrowser.openBrowserAsync(
          navigation.getParam('url', 'https://expo.io')
        )
      }
      style={{ paddingRight: 16 }}
    >
      <SvgOpenBook />
    </TouchableOpacity>
  ),
  title: navigation.getParam('title', null)
});
