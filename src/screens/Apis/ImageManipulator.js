import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import { Asset } from 'expo-asset';
import * as Haptics from 'expo-haptics';
import * as ImageManipulator from 'expo-image-manipulator';
import * as WebBrowser from 'expo-web-browser';
import { colors, device, func, gStyle, images } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';
import TouchIcon from '../../components/TouchIcon';

// icons
import SvgRotateLeft from '../../components/icons/Svg.RotateLeft';
import SvgRotateRight from '../../components/icons/Svg.RotateRight';
import SvgSave from '../../components/icons/Svg.Save';

const { Medium } = Haptics.ImpactFeedbackStyle;

class ImageManipulatorScreen extends React.Component {
  constructor() {
    super();

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

    // on iOS device, use Haptic feedback
    if (device.iOS) Haptics.impactAsync(Medium);

    this.setState({ image: manipResult });
  }

  async save() {
    const { image } = this.state;

    const accessCameraRoll = await func.cameraAccessAsync();

    // on iOS device, use Haptic feedback
    if (device.iOS) Haptics.impactAsync(Medium);

    if (accessCameraRoll) {
      await func.saveToCameraRollAsync(image.localUri);

      Alert.alert(
        'Image Saved!',
        "The image you modified has been saved to your device's image library",
        [
          {
            onPress: () => null,
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

    const imageExt = { height: imageHeight };

    return (
      <View style={gStyle.containerBg}>
        <Image source={image} style={[styles.image, imageExt]} />

        <View style={gStyle.pH2}>
          <View style={[gStyle.flexRowSpace, gStyle.p2]}>
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

        <View style={gStyle.spacer2} />

        <TouchButton
          btnStyle={[gStyle.btnPrimary, styles.btnExt]}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => {
            WebBrowser.openBrowserAsync(
              'https://unsplash.com/photos/dZOFaMG-0Q0'
            );
          }}
          text="Photo Credit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    width: device.width
  },
  containerLabel: {
    alignItems: 'center',
    width: 58
  },
  label: {
    color: colors.brandPrimary,
    marginTop: 8,
    textAlign: 'center'
  },
  btnExt: {
    alignSelf: 'center'
  }
});

export default ImageManipulatorScreen;
