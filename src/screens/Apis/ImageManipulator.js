import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ImageManipulator } from 'expo';
import { device, gStyle, images } from '../../api/constants';

import TouchButton from '../../components/TouchButton';

class ImageManipulatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUri: images.records
    };

    this.allowAccessToPhotos = this.allowAccessToPhotos.bind(this);
    this.rotate90 = this.rotate90.bind(this);
  }

  allowAccessToPhotos() {
    console.log('TODO :: ACCESS CHECK');
  }

  async rotate90() {
    const { imageUri } = this.state;

    const manipResult = await ImageManipulator.manipulateAsync(
      imageUri,
      [{ rotate: 90 }],
      { format: 'png' }
    );
    this.setState({ imageUri: manipResult });
  }

  render() {
    const { imageUri } = this.state;

    return (
      <View style={gStyle.container}>
        <View style={gStyle.spacer24} />

        <View style={gStyle.pH16}>
          <Text style={gStyle.paragraph}>Some text about something here.</Text>

          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.allowAccessToPhotos()}
            text="Allow Access to Photos"
          />
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.rotate90()}
            text="Rotate 90"
          />
        </View>

        <Image
          source={imageUri}
          style={{ height: 300, resizeMode: 'contain', width: device.width }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  placeholder: {
    alignItems: 'center',
    height: 40,
    marginBottom: 8,
    width: '100%'
  }
});

export default ImageManipulatorScreen;
