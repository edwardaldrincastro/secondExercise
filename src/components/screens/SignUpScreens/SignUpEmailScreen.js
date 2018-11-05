import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, Left, Switch } from "native-base";

class SignUpEmailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            toggleSwitch: true
        };
    }
    emailChangedHandler = (input) => {
        this.setState({
            email: input
        })
    }
    toggleSwitchHandler = () => {
        this.setState({
            toggleSwitch: !this.state.toggleSwitch
        })
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
                    <Text style={styles.welcome}> And, your email?</Text>
                    <Text style={styles.title}>EMAIL</Text>
                    <View style={styles.emailInput}>
                        <TextInput textContentType="emailAddress" onChangeText={(val) => this.emailChangedHandler(val)} underlineColorAndroid="white" />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.subscribe}>
                            <Text style={{ color: "white", fontSize: 12, }}>I'd like to receive marketing and policy communications from Ting and its partners.</Text>
                        </View>
                        <Switch value={this.state.toggleSwitch} onValueChange={this.toggleSwitchHandler} tintColor="#bbb" thumbTintColor="white" onTintColor="#64dd17" />
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Birthday')}>
                            <View style={styles.buttonStyle}>                         
                                <Icon name="ios-arrow-forward" size={24} color="#00bfa5" />                             
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
        marginRight: "50%",
        marginBottom: 20
    },
    title: {
        color: "#fff",
        fontSize: 12,
        marginRight: "71%"
    },
    subscribe: {
        width: "68%"
    },
    emailInput: {
        width: "82%",
        height: 35,
        justifyContent: "center"
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

export default SignUpEmailScreen;
