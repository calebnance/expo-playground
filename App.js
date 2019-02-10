import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { device, images as preloadImages, util } from './src/api/constants';

import Stack from './src/navigation/Stack';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };

    this.loadAssetsAsync = this.loadAssetsAsync.bind(this);
  }

  async loadAssetsAsync() {
    const imageAssets = util.cacheImages(preloadImages);

    await Promise.all([...imageAssets]).then(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;

    const barStyle = device.iOS ? 'dark-content' : 'light-content';

    if (isLoading) {
      return (
        <AppLoading
          onFinish={() => this.setState({ isLoading: false })}
          startAsync={this.loadAssetsAsync}
        />
      );
    }

    return (
      <React.Fragment>
        <StatusBar barStyle={barStyle} />
        <Stack />
      </React.Fragment>
    );
  }
}
