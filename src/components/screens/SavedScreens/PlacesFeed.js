import React, { Component } from 'react';
import { Modal, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from "react-redux";
import MapView from 'react-native-maps';
import PlaceList from "../SavedScreens/PlaceList";


class PlacesFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedPlace: null,
      selectedImage: null,
      focusedLocation: {
        latitude: 14.5557,
        longitude: 121.05,
        latitudeDelta: 0.0118,
        longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0118
      }
    };
  }
  setModalVisible(modalInput) {
    this.setState({ modalVisible: modalInput });
  }
  selectedHandler = (placeName, image, latitude, longitude) => {
    this.setState(prevState => {
      return {
        selectedPlace: placeName,
        selectedImage: image,
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: latitude,
          longitude: longitude
        },
      }
    })
    this.setModalVisible(true)
  }
  render() {

    return (
      <View>
        <PlaceList onSelectedPlace={this.selectedHandler} />
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ width: "100%", height: "100%", backgroundColor: "#eee" }}>
            <View style={styles.modalContainer}>
              <Image style={styles.modalImage} source={{ uri: this.state.selectedImage }} />
              <View style={{alignItems:"flex-start"}}>
                <Text>Name: {this.state.selectedPlace}</Text>
                <Text>Latitude: {this.state.focusedLocation.latitude}</Text>
                <Text>Longitude: {this.state.focusedLocation.longitude}</Text>
              </View>
              <MapView
                style={styles.map}
                region={this.state.focusedLocation}
                ref={ref => this.map = ref}>
                <MapView.Marker coordinate={this.state.focusedLocation} /></MapView>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View >

    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  modalImage: {
    width: "90%",
    height: 190
  },
  message: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
    flex: 1
  },
  map: {
    width: "90%",
    height: 190
  }

})
const mapStateToProps = state => {
  return {
    places: state.addPlace.places
  }
}

export default connect(mapStateToProps, null)(PlacesFeed);
