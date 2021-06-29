import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import navigationOptions from './defaultNavOptions';

// icons
import SvgComponents from '../components/icons/Svg.Components';

// screens
import ComponentsScreen from '../screens/Components';

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
