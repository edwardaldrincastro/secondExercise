import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { saved_list } from "../data/dataSample";

class SavedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedList: saved_list
    };
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: "white"}}>
        {this.state.savedList.map((item, index) => (
          <View key={index}>
            <View style={styles.savedList}>
              <Text style={styles.name}>{item.name}</Text>
                <View style={{ height: 220 }}>
                  <Image source={{ uri: item.img }}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                </View>
              </View>
          </View>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  savedList: {
    height: 240,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12
  },
  name: {
    fontSize: 26,
    marginBottom: 12,
  }
})
export default SavedScreen;
