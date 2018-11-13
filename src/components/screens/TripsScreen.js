import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import PickLocation from "../screens/TripsScreens/PickLocation";
import PickImage from "../screens/TripsScreens/PickImage";
import { addPlace } from "../../store/actions/addPlace";
import { connect } from "react-redux";

class TripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: {
        placeName: null,
        image: null,
        location: {
          latitude: null,
          longitude: null
        }
      }
    };
  }
  addPlaceHandler = (placeName) => {
    this.setState(prevState=>{
      return {
        ...prevState,
        places: {
          ...prevState.places,
          placeName: placeName
        }
      }
    })
  }
  locationPickedHandler = (location) => {
    console.log(`Pumasok sa location picked handler. Location:${location.latitude}+${location.longitude}`)
    this.setState(prevState=>{
      return {
        ...prevState,
        places: {
          ...prevState.places,
          location: {
            ...prevState.location,
            latitude: location.latitude,
            longitude: location.longitude
          }
        }  
      }
    })
    console.log("Done sa location picked handler")
  }
  imagePickedHandler = (image) => {
    this.setState(prevState=>{
      return {
        ...prevState,
        places: {
          ...prevState.places,
          image: image.base64
        }
      }
    })
  }
  submitPlacehandler = () => {
    console.log("Pumasok sa submit place handler")
    
    console.log(`submit places state longi: ${this.state.places.location.longitude}`)
    this.props.addPlaceToRedux(this.state.places.placeName, this.state.places.image, this.state.places.location.latitude, this.state.places.location.longitude)
    console.log("Done sa submit place handler")
    console.log(`my state: ${this.state}`)
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}> Trips </Text>
        <PickLocation onLocationPicked={this.locationPickedHandler}/>
        <PickImage onImagePicked={this.imagePickedHandler} />
        <View style={{width: "80%", alignSelf: "center" }}>
          <TextInput
            onChangeText={(val) => this.addPlaceHandler(val)}
            //  underlineColorAndroid="white" 
            value={this.state.placeName} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', }}>
          <Button title="Add place" onPress={this.submitPlacehandler} />
        </View>

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
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
})
const mapDispatchToProps = dispatch => {
  return {
      addPlaceToRedux: (placeName, image, latitude, longitude) => dispatch(addPlace(placeName, image, latitude, longitude))
  }
}
export default connect(null, mapDispatchToProps)(TripsScreen);
