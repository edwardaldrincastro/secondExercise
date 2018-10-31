import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, Left} from "native-base";

class SignUpSuccessScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View styles={styles.view}>
                    <Text style={styles.welcome}> Sign up successful </Text>
                </View>
                <View style={styles.signUpButton}>
                    <TouchableOpacity onPress={() => this.props.navigation.replace('Auth')}>
                    
                        <View style={styles.buttonStyle}>
                            
                            <Text style={styles.signUpButtonText}>
                                <Icon name="ios-arrow-forward" size={24} color="#00bfa5"/>
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
        fontSize: 20
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
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#fff",
        marginTop: 10,
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: "center"
    },
    signUpButtonText: {
        color: "#00bfa5",
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
    }
});

export default SignUpSuccessScreen;
