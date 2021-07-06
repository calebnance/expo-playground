import * as React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { gStyle } from '../../constants';

const PickerScreen = () => {
  const [band, setBand] = React.useState('mm');

  return (
    <View style={gStyle.containerBg}>
      <View style={gStyle.spacer3} />

      <Picker selectedValue={band} onValueChange={setBand}>
        <Picker.Item
          label="Red Hot Chili Peppers"
          value="rhcp"
          color="#9c0105"
        />
        <Picker.Item label="Modest Mouse" value="mm" color="#a0ca84" />
        <Picker.Item label="Daughter" value="daughter" color="#000000" />
      </Picker>
    </View>
  );
};

export default PickerScreen;
