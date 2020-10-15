import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import MapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={
        { 
          latitude: -31.7534021,
          longitude:-52.3350085,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
          }}
      >
        <Marker
          icon={MapMarker}
          coordinate={{
            latitude: -31.7534021,
            longitude:-52.3350085,
          }}
        >
          <Callout tooltip>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar de Menores</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  calloutContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    height: 46,
    justifyContent: 'center',
    paddingHorizontal: 16,
    width: 160,
  },
  calloutText: {

  }
});
