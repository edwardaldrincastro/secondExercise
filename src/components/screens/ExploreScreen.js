import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import imageArch5 from "../../assets/arch5.jpg";
import { data_samples, explores, saved_list } from "../data/dataSample";
import CategoriesSelection from "../SelectCategories";

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: explores,
      roomChoices: data_samples,
      savedList: saved_list
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text style={{ fontSize: 30 }}> Explore </Text>
          <View style={{ height: 160, backgroundColor: "white" }}>
              <CategoriesSelection categories={this.state.categories}/>
          </View>

                {/*   SUB CATEGORIES*/}

          <View style={{ height: 220, backgroundColor: "white" }}>
            <Text>Stockholm</Text>
            <ScrollView horizontal={true}>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>

            </ScrollView>
          </View>



          <View style={{ height: 220, backgroundColor: "white" }}>
            <Text>Stockholm</Text>
            <ScrollView horizontal={true}>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>

            </ScrollView>
          </View>



          <View style={{ height: 220, backgroundColor: "white" }}>
            <Text>Stockholm</Text>
            <ScrollView horizontal={true}>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>
              <View style={styles.subCategories}>
                <View style={{ height: 140, borderWidth: 1, borderColor: "red" }}>
                  <View style={{ height: 100 }}>
                    <Image source={imageArch5} style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                  </View>
                </View>
                <Text>Hotels</Text>
              </View>

            </ScrollView>
          </View>

          
        {/* MAIN VERTICAL SCROLL VIEW*/}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    height: 120,
    width: 120,
    backgroundColor: "white",
    margin: 10,
    borderWidth: 1,
    borderColor: "#bbb"
  },
  subCategories: {
    height: 180,
    width: 140,
    backgroundColor: "white",
    margin: 10,
    borderWidth: 1,
    borderColor: "#bbb"
  }
})
export default ExploreScreen;
