import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../../constants';

// components
import TouchButton from '../../components/TouchButton';

class AlertScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alert1: null,
      alert2: null
    };

    this.alertTwoOptions = this.alertTwoOptions.bind(this);
    this.alertThreeOptions = this.alertThreeOptions.bind(this);
  }

  alertTwoOptions() {
    Alert.alert(
      'Alert with 2 Options',
      'Alert description area',
      [
        {
          onPress: () => this.setState({ alert1: 'Cancel' }),
          style: 'cancel',
          text: 'Cancel'
        },
        {
          onPress: () => this.setState({ alert1: 'OK' }),
          text: 'OK'
        }
      ],
      {
        cancelable: false
      }
    );
  }

  alertThreeOptions() {
    Alert.alert(
      'Alert with 3 Options',
      'Alert description area',
      [
        {
          onPress: () => this.setState({ alert2: 'Ask me later' }),
          text: 'Ask me later'
        },
        {
          onPress: () => this.setState({ alert2: 'Cancel' }),
          style: 'cancel',
          text: 'Cancel'
        },
        {
          onPress: () => this.setState({ alert2: 'OK' }),
          text: 'OK'
        }
      ],
      {
        cancelable: false
      }
    );
  }

  render() {
    const { alert1, alert2 } = this.state;

    return (
      <View style={gStyle.container}>
        <View style={gStyle.spacer24} />

        <View style={gStyle.centerItems}>
          <TouchButton
            btnStyle={gStyle.btnPrimary}
            btnTextStyle={gStyle.btnPrimaryText}
            onPress={() => this.alertTwoOptions()}
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
            onPress={() => this.alertThreeOptions()}
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

export default AlertScreen;
