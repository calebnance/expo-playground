import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import SearchScreen from '../screens/Search';
import SvgSearch from '../components/icons/Svg.Search';

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
