import React from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import TouchTextIcon from '../components/TouchTextIcon';

import apis from '../data/apis';

const Apis = props => {
  const { navigation } = props;

  const { data } = apis;
  const dataArray = Object.values(data);

  return (
    <View style={gStyle.container}>
      <FlatList
        data={dataArray}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchTextIcon
            onPress={() =>
              navigation.navigate(item.route, {
                title: item.title,
                url: item.url
              })
            }
            text={item.title}
          />
        )}
      />
    </View>
  );
};

Apis.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Apis;
