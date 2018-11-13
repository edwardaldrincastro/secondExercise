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
                {/* <View style={{ height: 220, width: "100%", backgroundColor: "#eee"}}> */}
                {/* <Image source={this.state.imagePicked} style={{ height: 150, width: 200 }} /> */}
                {/* </View> */}
                <View style={{ width: "100%", height: 190, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{height: 150, width: 200, borderWidth: 1, borderColor: "#000", backgroundColor:"#eee"}}>
                        <Image source={this.state.imagePicked} style={{ height: "100%", width: "100%" }} />
                    </View>
                </View>
                <View style={{ width: "60%", margin: 10 }}>
                    <Button title="Pick image" onPress={this.pickImageHandler} />
                </View>

            </View>
        );
    }
}

export default PickImage;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 225,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",

    }
})
