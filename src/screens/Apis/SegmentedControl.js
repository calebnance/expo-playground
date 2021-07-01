import React from 'react';
import { View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { colors, gStyle } from '../../constants';

const SegmentedControlScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [index2, setIndex2] = React.useState(1);
  const [index3, setIndex3] = React.useState(0);

  return (
    <View style={[gStyle.container, gStyle.pH16]}>
      <View style={gStyle.spacer24} />

      <SegmentedControl
        values={['One', 'Two']}
        selectedIndex={index}
        onChange={(event) => {
          setIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />

      <View style={gStyle.spacer24} />

      <SegmentedControl
        values={['One', 'Two']}
        selectedIndex={index2}
        onChange={(event) => {
          setIndex2(event.nativeEvent.selectedSegmentIndex);
        }}
        tintColor={colors.brandPrimary}
        activeFontStyle={{ color: colors.white }}
      />

      <View style={gStyle.spacer24} />

      <SegmentedControl
        values={['One', 'Two']}
        selectedIndex={index3}
        onChange={(event) => {
          setIndex3(event.nativeEvent.selectedSegmentIndex);
        }}
        tintColor={colors.grey}
        activeFontStyle={{ color: colors.white }}
      />
    </View>
  );
};

export default SegmentedControlScreen;
