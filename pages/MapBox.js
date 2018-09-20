import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import Mapbox from '@mapbox/react-native-mapbox-gl';


Mapbox.setAccessToken('pk.eyJ1IjoicmFtb3NlIiwiYSI6ImNqOG9waDduMzA2djIzMnAxY2RtNmRwMjIifQ.QPkVf78YxfgHlARx0RDPNA');

export default class MapBoxScreen extends React.Component {
    static navigationOptions = {title: 'Map'};
          
    // constructor(props) {
    //   super(props);
  
    //   this.state = {
    //     latitude: null,
    //     longitude: null,
    //     error:null,
    //   };
    // }

    // componentDidMount() {
    //   navigator.geolocation.getCurrentPosition(
    //      (position) => {
    //        console.log("wokeeey");
    //        console.log(position);
    //        this.setState({
    //          latitude: position.coords.latitude,
    //          longitude: position.coords.longitude,
    //          error: null,
    //        });
    //      },
    //      (error) => this.setState({ error: error.message }),
    //      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    //    );
    //  }
  
        
    render() {
      return (
        <View style={styles.container}>
          <Mapbox.MapView
              styleURL={Mapbox.StyleURL.Street}
              zoomLevel={15}
              centerCoordinate={[11.256, 43.770]}
              style={styles.container}
              showUserLocation={true}>
          </Mapbox.MapView>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  container2: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
