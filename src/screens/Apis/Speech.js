import * as React from 'react';
import { View } from 'react-native';
import * as Speech from 'expo-speech';
import { gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

const SpeechScreen = () => (
  <View style={gStyle.containerBg}>
    <View style={gStyle.spacer3} />

    <View style={gStyle.pH2}>
      <TouchButton
        btnStyle={gStyle.btnPrimary}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => {
          const textToSpeech = 'Hello world!';
          Speech.speak(textToSpeech);
        }}
        text="Text to Speech"
      />
    </View>
  </View>
);

export default SpeechScreen;
