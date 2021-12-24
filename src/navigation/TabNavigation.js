import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

// grabs stacks
import StackApis from './StackApis';
import StackMore from './StackMore';

// icons
import SvgApis from '../components/icons/Svg.Apis';
import SvgMenu from '../components/icons/Svg.Menu';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let icon = <SvgApis fill={color} />;

        if (route.name === 'StackMore') {
          icon = <SvgMenu fill={color} />;
        }
        return icon;
      }
    })}
    tabBarOptions={{
      activeTintColor: colors.white,
      inactiveTintColor: colors.brandSecondary,
      style: {
        backgroundColor: colors.brandPrimary,
        borderTopWidth: 0
      }
    }}
  >
    <Tab.Screen
      name="StackApis"
      component={StackApis}
      options={{
        tabBarLabel: 'APIs'
      }}
    />
    <Tab.Screen
      name="StackMore"
      component={StackMore}
      options={{
        tabBarLabel: 'More'
      }}
    />
  </Tab.Navigator>
);
