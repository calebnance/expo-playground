import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import TouchTextIcon from '../components/TouchTextIcon';

class More extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'More'
    };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={gStyle.container}>
        <TouchTextIcon
          onPress={() =>
            navigation.navigate('MoreDevice', {
              title: 'Device',
              url: 'https://docs.expo.io/versions/latest/sdk/constants'
            })
          }
          text="Device information"
        />
      </View>
    );
  }
}

More.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default More;
