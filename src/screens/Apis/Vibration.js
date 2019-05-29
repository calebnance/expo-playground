import React from 'react';
import { Text, Vibration, View } from 'react-native';
import { device, gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

const appleNotes = (
  <React.Fragment>
    <Text style={gStyle.paragraph}>
      Vibrate doesn&apos;t work when silent mode is on.
    </Text>
    <Text style={gStyle.paragraph}>
      Also, you can&apos;t configure the vibrate duration 😱
    </Text>
    <Text style={gStyle.paragraph}>
      Click the book icon above for more information.
    </Text>
  </React.Fragment>
);

const androidNotes = (
  <React.Fragment>
    <Text style={gStyle.paragraph}>
      You can configure the vibrate duration!
    </Text>
    <Text style={gStyle.paragraph}>
      Vibrate duration is ignored on iOS devices.
    </Text>
  </React.Fragment>
);

class VibrationScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      once: 1000,
      twice: [1000, 1000]
    };

    this.vibrateOnce = this.vibrateOnce.bind(this);
    this.vibrateTwice = this.vibrateTwice.bind(this);
  }

  vibrateOnce() {
    const { once } = this.state;

    Vibration.vibrate(once);
  }

  vibrateTwice() {
    const { twice } = this.state;

    Vibration.vibrate(twice);
  }

  render() {
    const os = device.iOS ? 'Apple' : 'Android';
    const renderNotes = device.iOS ? appleNotes : androidNotes;

    return (
      <View style={gStyle.container}>
        <View style={gStyle.spacer24} />

        <View style={gStyle.centerItems}>
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.vibrateOnce()}
            text="Vibrate x 1"
          />
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.vibrateTwice()}
            text="Vibrate x 2"
          />

          <View style={gStyle.spacer24} />

          <Text style={gStyle.paragraph}>
            {`Since you are on an ${os} device...`}
          </Text>

          {renderNotes}
        </View>
      </View>
    );
  }
}

export default VibrationScreen;
