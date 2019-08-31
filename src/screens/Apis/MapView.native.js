import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import { colors, device, fonts, gStyle } from '../../constants';
import locations from '../../data/locations.json';

// icons
import SvgMapPin from '../../components/icons/Svg.MapPin';

// const { PROVIDER_GOOGLE } = MapView;
const locationsArray = Object.values(locations);

class MapViewScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: parseFloat(locationsArray[0].lat),
      lon: parseFloat(locationsArray[0].lon),
      location: 'New York',
      // mapProvider: PROVIDER_GOOGLE,
      mapProvider: null
    };

    // this.toggleMapService = this.toggleMapService.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  // toggleMapService(value) {
  //   this.setState({
  //     mapProvider: value ? null : PROVIDER_GOOGLE,
  //     useApple: value
  //   });
  // }

  handleLocationChange(name) {
    const { lat, lon } = locations[name];

    this.setState({
      lat: parseFloat(lat),
      lon: parseFloat(lon),
      location: name
    });
  }

  render() {
    const { lat, lon, location, mapProvider } = this.state;

    return (
      <View style={gStyle.container}>
        <View style={gStyle.spacer24} />

        <MapView
          style={{
            alignSelf: 'center',
            height: 240,
            width: device.width - 32
          }}
          provider={mapProvider}
          region={{
            latitude: lat,
            longitude: lon,
            latitudeDelta: 0.1822,
            longitudeDelta: 0.1421
          }}
        />

        <View style={gStyle.pH16}>
          <FlatList
            bounces={false}
            data={locationsArray}
            extraData={this.state}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              const activeLocation = item.name === location;
              const color = activeLocation
                ? { color: colors.brandPrimary }
                : null;
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => this.handleLocationChange(item.name)}
                  style={styles.containerLocation}
                >
                  <Text style={[styles.location, color]}>{item.name}</Text>
                  {activeLocation && <SvgMapPin size={18} />}
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={gStyle.spacer24} />
      </View>
    );
  }
}

/*
{device.iOS && (
  <View style={styles.lineItem}>
    <Text>Use Apple Maps?</Text>
    <Switch
      onValueChange={val => this.toggleMapService(val)}
      value={useApple}
    />
  </View>
)}
*/

const styles = StyleSheet.create({
  lineItem: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 48,
    marginBottom: 16,
    paddingHorizontal: 16,
    width: '100%'
  },
  containerLocation: {
    alignItems: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingVertical: 8
  },
  location: {
    fontFamily: fonts.medium,
    fontSize: 16
  }
});

export default MapViewScreen;
