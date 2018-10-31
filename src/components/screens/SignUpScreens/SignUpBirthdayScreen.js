import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, Left } from "native-base";

class SignUpBirthdayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00bfa5" }}>
                    <Left style={{ marginRight: "85%" }}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.goBack()} />
                    </Left>
                </Header>
                <View style={styles.container}>
                    <View styles={styles.view}>
                        <Text style={styles.welcome}> When is your birthday? </Text>
                    </View>
                   
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}>
                            <View style={styles.buttonStyle}>
                                <Text>
                                    <Icon name="ios-arrow-forward" size={24} color="#00bfa5" />
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfa5',
    },
    welcome: {
        color: "#fff",
        fontSize: 20,
        marginRight: "30%"
    },
    nextButton: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        marginLeft: "70%",
        marginTop: 30,
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    }

});

export default SignUpBirthdayScreen;
