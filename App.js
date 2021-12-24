import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { device, func } from './src/constants';

// root navigation stack
import RootStack from './src/navigation/RootStack';

export default () => {
  const [isLoading, setLoading] = React.useState(true);

  const barStyle = device.iOS ? 'dark-content' : 'light-content';

  if (isLoading) {
    return (
      <AppLoading
        onError={() => {
          // console.warn
        }}
        onFinish={() => setLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }

  return (
    <React.Fragment>
      <StatusBar barStyle={barStyle} />

      <RootStack />
    </React.Fragment>
  );
};
