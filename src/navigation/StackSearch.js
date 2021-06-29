import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import navigationOptions from './defaultNavOptions';

// icons
import SvgSearch from '../components/icons/Svg.Search';

// screens
import SearchScreen from '../screens/Search';

const Icon = ({ focused }) => <SvgSearch active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    SearchMain: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
        ...navigationOptions
      }
    }
  },
  {
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: Icon
    }
  }
);
