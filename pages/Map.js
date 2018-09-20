import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

let { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends React.Component {
    static navigationOptions = {title: 'Map'};
          
    constructor(props) {
      super(props);
  
      this.state = {
        region: {
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          
        },
        error:null,
        
      };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
         (position) => {
           
           console.log(position);
           this.setState({
             region: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
             }             
           });
         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
       );

      //  this.watchID = navigator.geolocation.watchPosition(
      //   position => {
      //     this.setState({
      //       region: {
      //         latitude: position.coords.latitude,
      //         longitude: position.coords.longitude,
      //         latitudeDelta: LATITUDE_DELTA,
      //         longitudeDelta: LONGITUDE_DELTA,
      //       }
      //     });
      //   }
      // );
     }


     /*
     <View>
          <Text> {this.state.latitude} </Text>
          <Text> {this.state.longitude} </Text>
          <Text> {this.state.error} </Text>
        </View> */
  
        
    render() {
      return (

        <View style={{flex:1, flexDirection:'column'}}>
          
        
          <MapView style={styles.map}
        region={this.state.region}
        showsUserLocation={true}
        >
          <MapView.Marker
            coordinate={ this.state.region }
          />
        </MapView>

        <View style={{flex:0.5, flexDirection:'row'}}>
            <Text> {this.state.region.latitude} </Text>
            <Text> {this.state.region.longitude} </Text>
            <Text> {this.state.error} </Text>
          </View>
        
        </View>

        

      );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex:1,
    flexDirection:'row'
  },
});
