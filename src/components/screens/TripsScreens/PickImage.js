import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePicked: null
        };
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker({ title: "Pick image" }, res => {
            if (res.didCancel) {
                console.log("User cancelled")
            } else if (res.error) {
                console.log("error", res.error)
            } else {
                this.setState({
                    imagePicked: {
                        uri: res.uri
                    }
                })
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: "50%", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Image source={this.state.imagePicked} style={{ height: 180, width: 200 }} />
                </View>
                <View>

                    <Button title="Pick image" onPress={this.pickImageHandler} />
                </View>
            </View>
        );
    }
}

export default PickImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
        // flexDirection: 'column',
        // justifyContent: 'space-evenly',

    }
})
