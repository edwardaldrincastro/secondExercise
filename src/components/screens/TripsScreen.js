import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TripsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}> Trips </Text>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text>No recent trips.</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    color: "#6d6d6d"
  }
})
export default TripsScreen;
