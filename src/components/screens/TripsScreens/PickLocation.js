import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps'

class PickLocation extends Component {
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
        this.props.onLocationPicked({
            latitude: coords.latitude,
            longitude: coords.longitude
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
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.focusedLocation}
                    onPress={this.pickLocationHandler}
                    ref={ref => this.map = ref}>
                    {marker}</MapView>
                <View style={{ width: "60%", margin: 10 }}>
                    <Button title="Location" onPress={this.getLocationHandler} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 225,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
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
        width: "90%",
        height: 190
    }
})
export default PickLocation;
