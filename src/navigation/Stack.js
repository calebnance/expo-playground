import { createAppContainer, createStackNavigator } from 'react-navigation';

// navigation stack
import TabNavigator from './TabNavigator';

// modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

// screens
import ModalVideo from '../screens/ModalVideo';

const StackNavigator = createStackNavigator(
  {
    TabMain: {
      screen: TabNavigator
    },

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalVideo: {
      screen: ModalVideo
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabMain',
    transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
