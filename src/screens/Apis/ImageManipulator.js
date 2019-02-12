import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { Asset, ImageManipulator } from 'expo';
import { colors, device, func, gStyle, images } from '../../api/constants';

import TouchIcon from '../../components/TouchIcon';

import SvgRotateLeft from '../../components/icons/Svg.RotateLeft';
import SvgRotateRight from '../../components/icons/Svg.RotateRight';
import SvgSave from '../../components/icons/Svg.Save';

class ImageManipulatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      imageHeight: null
    };

    this.rotate90 = this.rotate90.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    const { height, width } = Image.resolveAssetSource(images.records);
    const responsiveHeight = Math.round((device.width * height) / width);

    (async () => {
      const image = Asset.fromModule(images.records);
      await image.downloadAsync();

      this.setState({
        image,
        imageHeight: responsiveHeight
      });
    })();
  }

  async rotate90(direction) {
    const { image } = this.state;
    const rotate = direction === 'right' ? 90 : -90;

    const manipResult = await ImageManipulator.manipulateAsync(
      image.localUri || image.uri,
      [{ rotate }],
      { format: 'png' }
    );

    this.setState({ image: manipResult });
  }

  async save() {
    const { image } = this.state;

    const accessCameraRoll = await func.permitCameraRoll();

    if (accessCameraRoll === 'granted') {
      await func.asyncSaveToCamRoll(image.uri);

      Alert.alert(
        'Image Saved!',
        "The image you modified has been saved to your device's image library",
        [
          {
            onPress: () => console.log('cool'),
            text: 'OK'
          }
        ],
        {
          cancelable: false
        }
      );
    }
  }

  render() {
    const { image, imageHeight } = this.state;

    return (
      <View style={gStyle.container}>
        <Image
          source={image}
          style={{
            height: imageHeight,
            resizeMode: 'contain',
            width: device.width
          }}
        />
        <View style={gStyle.pH16}>
          <View style={[gStyle.flexRowSpace, gStyle.p16]}>
            <View style={styles.containerLabel}>
              <TouchIcon
                icon={<SvgRotateLeft />}
                iconColor={colors.brandPrimary}
                onPress={() => this.rotate90('left')}
              />
              <Text style={styles.label}>Rotate Left</Text>
            </View>
            <View style={styles.containerLabel}>
              <TouchIcon
                icon={<SvgSave />}
                iconColor={colors.brandPrimary}
                onPress={() => this.save()}
              />
              <Text style={styles.label}>Save Image</Text>
            </View>
            <View style={styles.containerLabel}>
              <TouchIcon
                icon={<SvgRotateRight />}
                iconColor={colors.brandPrimary}
                onPress={() => this.rotate90('right')}
              />
              <Text style={styles.label}>Rotate Right</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLabel: {
    alignItems: 'center',
    width: 58
  },
  label: {
    color: colors.brandPrimary,
    marginTop: 8,
    textAlign: 'center'
  }
});

export default ImageManipulatorScreen;
