import React from 'react';
import { ScrollView, Slider, StyleSheet, Text, View } from 'react-native';
import * as Brightness from 'expo-brightness';
import { colors, device, gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

class BrightnessScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: null,
      original: null
    };

    this.getBrightness = this.getBrightness.bind(this);
    this.setBrightness = this.setBrightness.bind(this);
    this.resetBrightness = this.resetBrightness.bind(this);
  }

  componentDidMount() {
    this.getBrightness();
  }

  async getBrightness() {
    const { original } = this.state;
    let curBrightness = await Brightness.getBrightnessAsync();

    // i've only seen android returning -1
    if (curBrightness === -1) {
      // so we need to grab system brightness
      curBrightness = await Brightness.getSystemBrightnessAsync();
    }

    this.setState({
      current: curBrightness.toFixed(2),
      original: original === null ? curBrightness.toFixed(2) : original
    });
  }

  async setBrightness(value) {
    await Brightness.setBrightnessAsync(value);

    this.setState({
      current: value.toFixed(2)
    });
  }

  resetBrightness() {
    const { original } = this.state;

    this.setBrightness(parseFloat(original));
  }

  render() {
    const { current, original } = this.state;

    return (
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={gStyle.container}
      >
        <View style={gStyle.spacer24} />

        <View style={gStyle.centerItems}>
          {original && (
            <Text style={gStyle.paragraph}>
              <Text style={gStyle.paragraphBold}>Original Brightness:</Text>
              {` ${original}`}
            </Text>
          )}
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.resetBrightness()}
            text="Reset To Original Brightness"
          />

          <View style={gStyle.separator} />

          {current && (
            <Text style={gStyle.paragraph}>
              <Text style={gStyle.paragraphBold}>Current Brightness:</Text>
              {` ${current}`}
            </Text>
          )}

          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.setBrightness(0.1)}
            text="Set Brightness: 10%"
          />
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.setBrightness(0.3)}
            text="Set Brightness: 30%"
          />
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.setBrightness(0.8)}
            text="Set Brightness: 80%"
          />
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.setBrightness(1)}
            text="Set Brightness: 100%"
          />

          <View style={gStyle.spacer24} />

          <Text style={gStyle.paragraphBold}>Brightness Slider</Text>
          <Slider
            maximumValue={1}
            minimumTrackTintColor={colors.brandPrimary}
            onValueChange={value => this.setBrightness(value)}
            step={0.01}
            style={styles.slider}
            value={current}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    marginBottom: 24,
    width: device.width - 64
  }
});

export default BrightnessScreen;
