import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { fonts, gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

// broken on SDK 32, waiting for fix
// https://github.com/expo/expo/issues/3224
// const { Success, Warning, Error } = Haptic.NotificationFeedbackType;

const { Light, Medium, Heavy } = Haptics.ImpactFeedbackStyle;

const HapticScreen = () => (
  <ScrollView style={gStyle.container}>
    <View style={gStyle.spacer24} />

    <View style={gStyle.pH16}>
      <Text style={gStyle.paragraph}>
        Provides haptic feedback for iOS 10+ devices using the Taptic Engine.
      </Text>

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Haptic Selection</Text>
      </View>

      <TouchButton
        btnStyle={[gStyle.btnPrimary, { alignSelf: 'center' }]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.selectionAsync()}
        text="Simple"
      />

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Haptic Impact</Text>
      </View>

      <TouchButton
        btnStyle={[gStyle.btnPrimary, { alignSelf: 'center' }]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Light)}
        text="Light"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, { alignSelf: 'center' }]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Medium)}
        text="Medium"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, { alignSelf: 'center' }]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Heavy)}
        text="Heavy"
      />

      <View style={gStyle.spacer24} />

      <Text
        style={[gStyle.paragraph, { fontFamily: fonts.bold, marginBottom: 8 }]}
      >
        The Taptic engine will do nothing given the following circumstances:
      </Text>
      <Text style={[gStyle.paragraph, { marginBottom: 4 }]}>
        - Low Power Mode is enabled
      </Text>
      <Text style={[gStyle.paragraph, { marginBottom: 4 }]}>
        - User disabled the Taptic Engine in settings
      </Text>
      <Text style={[gStyle.paragraph, { marginBottom: 4 }]}>
        - Haptic engine generation is to low (less than 2nd gen) - Private API
      </Text>
      <Text style={[gStyle.paragraph, { marginBottom: 4 }]}>
        - iOS version is less than 10 (iPhone 7 is the first phone to support
        this)
      </Text>

      <View style={gStyle.spacer24} />
    </View>
  </ScrollView>
);

export default HapticScreen;
