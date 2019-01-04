import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import ComponentsScreen from '../screens/Components';
import SvgComponents from '../components/icons/Svg.Components';

const Icon = ({ focused }) => <SvgComponents active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    ComponentsMain: {
      screen: ComponentsScreen,
      navigationOptions: {
        title: 'Components',
        ...navigationOptions
      }
    }
  },
  {
    navigationOptions: {
      tabBarLabel: 'Components',
      tabBarIcon: Icon
    }
  }
);
