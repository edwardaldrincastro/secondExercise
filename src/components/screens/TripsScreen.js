import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps'

class TripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedLocation: {
        latitude: 14.5557,
        longitude: 121.05,
        latitudeDelta: 0.0118,
        longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0118
      },
      locationChosen: false
    };
  }
  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    })
    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChosen: true
      }
    })

  }

  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const coordsEvent = {
        nativeEvent: {
          coordinate: {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      }
      this.pickLocationHandler(coordsEvent)
    },
      err => {
        console.log(err);
        alert("Fetching position failed")
      })
  }
  render() {
    let marker = null
    if (this.state.locationChosen) {
      marker = <MapView.Marker coordinate={this.state.focusedLocation} />
    }
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}> Trips </Text>
        <View style={styles.container}>
          {/* <View style={}> */}
          <MapView
            style={styles.map}
            // region={this.state.focusedLocation}
            initialRegion={this.state.focusedLocation}
            onPress={this.pickLocationHandler}
            ref={ref => this.map = ref}>
            {marker}</MapView>
          {/* </View> */}
          <View>
            <Text>No recent trips.</Text>
            <Button title="Locate me" onPress={this.getLocationHandler} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center", 
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: "#6d6d6d"
  },
  map: {
    width: "100%",
    height: 250
  }
})
export default TripsScreen;
