import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// navigation stacks
import StackApis from './StackApis';
// import StackComponents from './StackComponents';
// import StackSearch from './StackSearch';
import StackMore from './StackMore';

export default createBottomTabNavigator(
  {
    StackApis,
    // StackComponents,
    // StackSearch,
    StackMore
  },
  {
    initialRouteName: 'StackApis',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.brandSecondary,
      style: {
        backgroundColor: colors.brandPrimary,
        borderTopWidth: 0
      }
    }
  }
);
