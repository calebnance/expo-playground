import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

// haptics
const { Success, Warning, Error } = Haptics.NotificationFeedbackType;
const { Light, Medium, Heavy } = Haptics.ImpactFeedbackStyle;

const HapticScreen = () => (
  <ScrollView style={gStyle.containerBg}>
    <View style={gStyle.spacer2} />

    <View style={gStyle.pH2}>
      <Text style={gStyle.paragraph}>
        Provides haptic feedback for iOS 10+ devices using the Taptic Engine.
      </Text>

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Haptic Selection</Text>
      </View>

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.selectionAsync()}
        text="Simple"
      />

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Haptic Notification</Text>
      </View>

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.notificationAsync(Success)}
        text="Success"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.notificationAsync(Warning)}
        text="Warning"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.notificationAsync(Error)}
        text="Error"
      />

      <View style={gStyle.sectionHeading}>
        <Text style={gStyle.sectionHeadingText}>Haptic Impact</Text>
      </View>

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Light)}
        text="Light"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Medium)}
        text="Medium"
      />

      <TouchButton
        btnStyle={[gStyle.btnPrimary, styles.btnExt]}
        btnTextStyle={gStyle.btnPrimaryText}
        onPress={() => Haptics.impactAsync(Heavy)}
        text="Heavy"
      />

      <View style={gStyle.spacer2} />

      <Text style={[gStyle.paragraphBold, gStyle.mB1]}>
        The Taptic engine will do nothing given the following circumstances:
      </Text>
      <Text style={[gStyle.paragraph, gStyle.mB1]}>
        - Low Power Mode is enabled
      </Text>
      <Text style={[gStyle.paragraph, gStyle.mB1]}>
        - User disabled the Taptic Engine in settings
      </Text>
      <Text style={[gStyle.paragraph, gStyle.mB1]}>
        - Haptic engine generation is to low (less than 2nd gen) - Private API
      </Text>
      <Text style={[gStyle.paragraph, gStyle.mB1]}>
        - iOS version is less than 10 (iPhone 7 is the first phone to support
        this)
      </Text>

      <View style={gStyle.spacer3} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  btnExt: {
    alignSelf: 'center'
  }
});

export default HapticScreen;
