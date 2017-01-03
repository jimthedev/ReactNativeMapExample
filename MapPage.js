import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';

export default class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }
  newCoordinates() {
    //request to get city object data from api
    axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/minneapolis.json?access_token=sk.eyJ1Ijoic3BlbGxlZ3JlbmUiLCJhIjoiY2l4Z2prNjdvMDAxcDJ0dzNzYTZ5d284biJ9.ipSnbxgYgLiMmbSUNUJVcQ")
    .then((response)=> {
      let newData = response.data.features[0];
      console.log(response.data);
      this.setState({
        region: {
          latitude: newData.center[1],
          longitude: newData.center[0],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      })
      console.log(newData);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  componentDidMount() {
    Alert.alert('Mounted');
  }
  goBackHome() {
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
      <MapView
        region={this.state.region}
        style={styles.map}
      />
        <Text style={styles.welcome}>
          Welcome to Map Page!
        </Text>
        <TouchableHighlight onPress={this.goBackHome.bind(this)}>
          <Text>Go Back</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.newCoordinates.bind(this)}>
          <Text>New Coordinates</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
})
