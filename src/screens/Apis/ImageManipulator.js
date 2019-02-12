import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Asset, ImageManipulator } from 'expo';
import { colors, device, gStyle, images } from '../../api/constants';

import TouchIcon from '../../components/TouchIcon';

import SvgRotateLeft from '../../components/icons/Svg.RotateLeft';
import SvgRotateRight from '../../components/icons/Svg.RotateRight';

class ImageManipulatorScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null
    };
    this.rotate90 = this.rotate90.bind(this);
  }

  componentDidMount() {
    (async () => {
      const image = Asset.fromModule(images.records);
      await image.downloadAsync();

      this.setState({
        image
      });
      console.log(image);
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

  render() {
    const { image } = this.state;

    return (
      <View style={gStyle.container}>
        <View style={gStyle.spacer24} />

        <View style={gStyle.pH16}>
          <View style={[gStyle.flexRowSpace, gStyle.p16]}>
            <TouchIcon
              icon={<SvgRotateRight />}
              iconColor={colors.brandPrimary}
              onPress={() => this.rotate90('right')}
            />
            <TouchIcon
              icon={<SvgRotateLeft />}
              iconColor={colors.brandPrimary}
              onPress={() => this.rotate90('left')}
            />
          </View>
        </View>

        <Image
          source={image}
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
