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

class KeyboardScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dKey: '',
      lKey: '',
      text: ''
    };
  }

  render() {
    const { dKey, lKey, text } = this.state;

    return (
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <ScrollView style={gStyle.container}>
          <View style={gStyle.spacer24} />

          <View style={gStyle.pH16}>
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
              onChangeText={input => this.setState({ lKey: input })}
              placeholder="tap here"
              placeholderTextColor={colors.grey}
              selectionColor={colors.brandPrimary}
              style={styles.input}
              value={lKey}
            />

            <Text style={styles.label}>Dark Keyboard</Text>
            <TextInput
              keyboardAppearance="dark"
              onChangeText={input => this.setState({ dKey: input })}
              placeholder="tap here"
              placeholderTextColor={colors.grey}
              selectionColor={colors.brandPrimary}
              style={styles.input}
              value={dKey}
            />

            <View style={gStyle.sectionHeading}>
              <Text style={gStyle.sectionHeadingText}>Keyboard Type</Text>
            </View>

            <Text style={styles.label}>Number Pad</Text>
            <TextInput
              onChangeText={input => this.setState({ text: input })}
              keyboardType="number-pad"
              placeholder="tap here"
              placeholderTextColor={colors.grey}
              selectionColor={colors.brandPrimary}
              style={styles.input}
              value={text}
            />

            <Text style={styles.label}>Phone Pad</Text>
            <TextInput
              onChangeText={input => this.setState({ text: input })}
              keyboardType="phone-pad"
              placeholder="tap here"
              placeholderTextColor={colors.grey}
              selectionColor={colors.brandPrimary}
              style={styles.input}
              value={text}
            />

            <Text style={styles.label}>E-mail Address</Text>
            <TextInput
              onChangeText={input => this.setState({ text: input })}
              keyboardType="email-address"
              placeholder="tap here"
              placeholderTextColor={colors.grey}
              selectionColor={colors.brandPrimary}
              style={styles.input}
              value={text}
            />

            <View style={gStyle.spacer240} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

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
