import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// navigation stack
import TabNavigator from './TabNavigator';

// screens
import ModalVideo from '../screens/ModalVideo';

const StackNavigator = createStackNavigator(
  {
    TabNavigator,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalVideo
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabNavigator',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
