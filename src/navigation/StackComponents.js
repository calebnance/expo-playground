import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import ComponentsScreen from '../screens/Components';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ComponentsMain"
      component={ComponentsScreen}
      options={{
        title: 'Components'
      }}
    />
  </Stack.Navigator>
);
