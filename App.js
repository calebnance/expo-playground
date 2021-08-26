import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { device, func } from './src/constants';

import Stack from './src/navigation/Stack';

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

      <Stack />
    </React.Fragment>
  );
};
