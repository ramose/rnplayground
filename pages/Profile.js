import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
            title: 'My Profile',
          };
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Profile Screen</Text>
            </View>
          );
    }
}