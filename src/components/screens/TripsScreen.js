import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PickLocation from "../screens/TripsScreens/PickLocation";
import PickImage from "../screens/TripsScreens/PickImage";


class TripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Trips </Text>
      <PickLocation/>
      <PickImage/>
    </View>
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
export default TripsScreen;
