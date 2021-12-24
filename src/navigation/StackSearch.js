import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SearchScreen from '../screens/Search';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchMain"
      component={SearchScreen}
      options={{
        title: 'Search'
      }}
    />
  </Stack.Navigator>
);
