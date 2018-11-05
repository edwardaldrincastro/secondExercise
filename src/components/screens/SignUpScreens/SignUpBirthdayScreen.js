import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { Header, Left, DatePicker } from "native-base";

class SignUpBirthdayScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date()
        };
        this.setDate = this.setDate.bind(this);
    };
    setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
                    <View>
                        <Text style={styles.description}>You must be at least 18 years old to use Ting. Other people won't see your Birthday.</Text>

                    </View>
                    <Text style={styles.title}>BIRTHDAY</Text>
                    <View>
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(1900, 1, 1)}
                            maximumDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
                            textStyle={{ color: "white", fontSize: 13, marginRight: "66%", marginTop: 10 }}
                            placeHolderTextStyle={{ color: "white", fontSize: 13, marginRight: "66%", marginTop: 10 }}
                            onDateChange={this.setDate}
                        />
                        <View
                            style={{
                                borderTopColor: '#eeeeee',
                                borderTopWidth: 1,
                                marginLeft: 10,
                            }}/>
                    </View>
                    <View style={styles.nextButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Success')}>
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
    title: {
        color: "#fff",
        fontSize: 13,
        marginRight: "71%",
        marginTop: 15
    },
    description: {
        color: "white",
        fontSize: 14,
        marginLeft: 21
    },
    welcome: {
        color: "#fff",
        fontSize: 20,
        marginRight: "35%",
        marginBottom: 20
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
