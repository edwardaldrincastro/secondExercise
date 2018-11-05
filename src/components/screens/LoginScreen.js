import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, Left } from "native-base";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPass: true,
            filter: "SHOW",
            viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
        };
        Dimensions.addEventListener("change", this.updateStyles)
    
      }
    
      componentWillUnmount() {
        Dimensions.removeEventListener("change", this.updateStyles)
      }
    
      updateStyles = (dims) => {
        this.setState({
          // viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
          viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        })
      }
    emailChangedHandler = (input) => {
        this.setState({
            email: input
        })
    }
    passwordChangedHandler = (input) => {
        this.setState({
            password: input
        })
    }
    showPasswordHandler = () => {
        this.setState({
            showPass: !this.state.showPass,
        })
        this.passwordTextHandler()
    }
    passwordTextHandler = () => {
        if (this.state.showPass === false) {
            this.setState({
                filter: "SHOW"
            })
        } else {
            this.setState({
                filter: "HIDE"
            })
        }
    }
    loginHandler = () => {
        if ((this.state.email && this.state.password) === ""){
            alert("Your email and/or password is invalid.")
        } else {
        this.props.navigation.navigate('Entry')
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: "#00bfa5" }}>
                    <Left style={{ marginRight: "85%" }}>
                        <Icon name="ios-arrow-back" size={30} color="#fff" onPress={() => this.props.navigation.replace('Auth')} />
                    </Left>
                </Header>

                <View style={styles.container}>
                <Text style={this.state.viewMode === "portrait" ? styles.portraitWelcome : styles.landscapeWelcome}>Login</Text>
                    
                <Text style={this.state.viewMode === "portrait" ? styles.portraitTitle : styles.landscapeTitle}>EMAIL</Text>
                
                    <View style={styles.firstNameInput}>
                        <TextInput
                            textContentType="emailAddress"
                            onChangeText={(val) => this.emailChangedHandler(val)}
                            underlineColorAndroid="white" />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={this.state.viewMode === "portrait" ? styles.portraitPassword : styles.landscapePassword}>PASSWORD</Text>
                
                        <TouchableOpacity onPress={this.showPasswordHandler}>
                            <View style={{ width: 30 }}>
                                <Text style={{ color: "white", fontSize: 10 }}>{this.state.filter}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.lastNameInput}>
                        <TextInput
                            textContentType="password"
                            onChangeText={(val) => this.passwordChangedHandler(val)}
                            secureTextEntry={this.state.showPass}
                            underlineColorAndroid="white" />
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.loginHandler()}>
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
    portraitWelcome: {
        color: "#fff",
        fontSize: 20,
        marginRight: "70%",
        marginBottom: 20
    },
    landscapeWelcome: {
        color: "#fff",
        fontSize: 20,
        marginRight: "80%",
        marginBottom: 20
    },
    email: {
        color: "#fff",
        fontSize: 12,
        marginRight: 260
    },
    portraitPassword: {
        color: "#fff",
        fontSize: 12,
        marginRight: 200
    },
    landscapePassword: {
        color: "#fff",
        fontSize: 12,
        marginRight: 400
    },
    firstNameInput: {
        width: "82%",
        height: 35,
        justifyContent: "center"
    },
    lastNameInput: {
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
    },
});

export default LoginScreen;
