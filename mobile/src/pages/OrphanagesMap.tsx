import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import MapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../services/api';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const navigation = useNavigation();

  useEffect(()=> {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  },[]);
  
  function handleNavigateToOrphanageDetails(id: number){
    navigation.navigate('OrphanageDetails', { id });
  }
  function handleNavigateToCreateOrphanage(){
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      initialRegion={
        { 
          latitude: -31.7492119,
          longitude:-52.3034124,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
          }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={MapMarker}
              calloutAnchor={{
                x: 2.7,
                y: 0.8,
              }}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            >
              <Callout tooltip onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}>
                <View style={styles.calloutContainer}>
                  <Text style={styles.calloutText}>{orphanage.name}</Text>
                </View>
              </Callout>
            </Marker>
          )
        })}
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {orphanages.length} orfanatos encontrados
        </Text>
        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  )
};

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
    color: '#0089A5',
    fontFamily: 'Nunito_700Bold',
    fontSize: 14,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    bottom: 32,
    elevation: 3,
    flexDirection: 'row',
    height: 56,
    left: 24,
    justifyContent: 'space-between',
    paddingLeft: 24,
    position: 'absolute',
    right: 32,
  },
  footerText: {
    color: '#8FA7B3',
    fontFamily: 'Nunito_700Bold',
  },
  createOrphanageButton: {
    alignItems: 'center',
    backgroundColor: '#15C3D6',
    borderRadius: 20,
    height: 56,
    justifyContent: 'center',
    width: 56,
  }
});