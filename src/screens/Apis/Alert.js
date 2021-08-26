import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

const AlertScreen = () => {
  const [alert1, setAlert1] = React.useState(null);
  const [alert2, setAlert2] = React.useState(null);

  const alertTwoOptions = () => {
    Alert.alert(
      'Alert with 2 Options',
      'Alert description area',
      [
        {
          onPress: () => setAlert1('Cancel'),
          style: 'cancel',
          text: 'Cancel'
        },
        {
          onPress: () => setAlert1('OK'),
          text: 'OK'
        }
      ],
      {
        cancelable: false
      }
    );
  };

  const alertThreeOptions = () => {
    Alert.alert(
      'Alert with 3 Options',
      'Alert description area',
      [
        {
          onPress: () => setAlert2('Ask me later'),
          text: 'Ask me later'
        },
        {
          onPress: () => setAlert2('Cancel'),
          style: 'cancel',
          text: 'Cancel'
        },
        {
          onPress: () => setAlert2('OK'),
          text: 'OK'
        }
      ],
      {
        cancelable: false
      }
    );
  };

  return (
    <View style={gStyle.containerBg}>
      <View style={gStyle.spacer2} />

      <View style={gStyle.centerItems}>
        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={alertTwoOptions}
          text="Alert with 2 Options"
        />

        <View style={styles.placeholder}>
          {alert1 && (
            <Text style={gStyle.paragraph}>{`Selected: ${alert1}`}</Text>
          )}
        </View>

        <TouchButton
          btnStyle={gStyle.btnPrimary}
          btnTextStyle={gStyle.btnPrimaryText}
          onPress={alertThreeOptions}
          text="Alert with 3 Options"
        />

        <View style={styles.placeholder}>
          {alert2 && (
            <Text style={gStyle.paragraph}>{`Selected: ${alert2}`}</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    alignItems: 'center',
    height: 32,
    marginBottom: 8,
    width: '100%'
  }
});

export default AlertScreen;
