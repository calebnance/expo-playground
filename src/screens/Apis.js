import React from 'react';
import { FlatList, View } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import { device, gStyle } from '../api/constants';

import TouchTextIcon from '../components/TouchTextIcon';

import apis from '../data/apis.json';

const Apis = props => {
  const { navigation } = props;

  const { data } = apis;
  const dataArray = Object.values(data);

  return (
    <View style={gStyle.container}>
      <FlatList
        data={dataArray}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          let textMuted = null;

          // iOS system check only?
          if (item.iosVerMin) {
            // if not ios, return
            if (!device.iOS) {
              return null;
            }
            // get system version of device
            const sysVersion = Constants.platform.ios.systemVersion;

            if (sysVersion < item.iosVerMin) {
              return null;
            }

            textMuted = ' - iOS';
          }

          return (
            <TouchTextIcon
              onPress={() =>
                navigation.navigate(item.route, {
                  title: item.title,
                  url: item.url
                })
              }
              text={item.title}
              textMuted={textMuted}
            />
          );
        }}
      />
    </View>
  );
};

Apis.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Apis;
