import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import brandIcon from '../../assets/hot-air-balloon.png';

class AuthScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        header: null
    }
    loginHandler = () => {
        this.props.navigation.navigate('Login')
      }
    render() {
        return (
            <View style={styles.container}>
            {/* <Image source={brandIcon} style={styles.brandIcon} /> */}
                <View styles={styles.view}>
                    <Text style={styles.welcome}> Welcome to Ting </Text>
                </View>
                <View style={styles.loginButton}>
                    <TouchableOpacity onPress={() => this.loginHandler()}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.loginButtonText}>
                                Login
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.signUpButton}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Name')}>
                        <View style={styles.buttonStyle}>
                            <Text style={styles.signUpButtonText}>
                                Sign Up
                            </Text>
                        </View>
                    </TouchableOpacity>
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
        fontSize: 22,
        marginRight: 145,
        marginBottom: 10
    },
    loginButton: {
        width: "80%",
        height: 35,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: "#fff",
        marginTop: 10,
        justifyContent: "center"
    },
    signUpButton: {
        width: "80%",
        height: 35,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fff",
        marginTop: 10,
        justifyContent: "center"
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    },
    signUpButtonText: {
        color: "#fff",
        fontSize: 14,
    },
    loginButtonText: {
        color: "#00bfa5",
        fontSize: 14,
    },
    buttonContainer: {
        width: "100%",
        // justifyContent: 'center',
        alignItems: "center"
    },
    brandIcon: {
        height: 150,
        width: 150,
        marginBottom: 40,
        marginRight: 20
    }
});

export default AuthScreen;
