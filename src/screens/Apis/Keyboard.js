import React from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { colors, fonts, gStyle } from '../../constants';

const KeyboardScreen = () => {
  const [lightText, setLightText] = React.useState('');
  const [darkText, setDarkText] = React.useState('');
  const [numberText, setNumberText] = React.useState('');
  const [phoneText, setPhoneText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <ScrollView style={gStyle.containerBg}>
        <View style={gStyle.spacer2} />

        <View style={gStyle.pH2}>
          <Text style={gStyle.paragraph}>
            Below are examples of what can be achieved with the Keyboard.
          </Text>

          <View style={gStyle.sectionHeading}>
            <Text style={gStyle.sectionHeadingText}>Keyboard Look</Text>
          </View>

          <Text style={gStyle.paragraph}>
            Also notice the placeholder and text selection color can be set as
            well.
          </Text>

          <Text style={styles.label}>Light Keyboard</Text>
          <TextInput
            keyboardAppearance="light"
            onChangeText={setLightText}
            placeholder="tap here"
            placeholderTextColor={colors.grey}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={lightText}
          />

          <Text style={styles.label}>Dark Keyboard</Text>
          <TextInput
            keyboardAppearance="dark"
            onChangeText={setDarkText}
            placeholder="tap here"
            placeholderTextColor={colors.grey}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={darkText}
          />

          <View style={gStyle.sectionHeading}>
            <Text style={gStyle.sectionHeadingText}>Keyboard Type</Text>
          </View>

          <Text style={styles.label}>Number Pad</Text>
          <TextInput
            onChangeText={setNumberText}
            keyboardType="number-pad"
            placeholder="tap here"
            placeholderTextColor={colors.grey}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={numberText}
          />

          <Text style={styles.label}>Phone Pad</Text>
          <TextInput
            onChangeText={setPhoneText}
            keyboardType="phone-pad"
            placeholder="tap here"
            placeholderTextColor={colors.grey}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={phoneText}
          />

          <Text style={styles.label}>E-mail Address</Text>
          <TextInput
            onChangeText={setEmailText}
            keyboardType="email-address"
            placeholder="tap here"
            placeholderTextColor={colors.grey}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={emailText}
          />

          <View style={gStyle.spacer16} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.bold,
    fontSize: 16,
    marginBottom: 4
  },
  input: {
    borderColor: colors.lightGrey,
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    marginBottom: 24,
    paddingHorizontal: 8
  }
});

export default KeyboardScreen;
