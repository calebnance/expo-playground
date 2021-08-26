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

const VibrationScreen = () => {
  const os = device.iOS ? 'Apple' : 'Android';
  const renderNotes = device.iOS ? appleNotes : androidNotes;

  return (
    <View style={gStyle.containerBg}>
      <View style={gStyle.spacer3} />

      <View style={gStyle.centerItems}>
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Vibration.vibrate(1000)}
          text="Vibrate x 1"
        />
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={() => Vibration.vibrate([1000, 1000])}
          text="Vibrate x 2"
        />

        <View style={gStyle.spacer3} />

        <Text style={gStyle.paragraph}>
          {`Since you are on an ${os} device...`}
        </Text>

        {renderNotes}
      </View>
    </View>
  );
};

export default VibrationScreen;
