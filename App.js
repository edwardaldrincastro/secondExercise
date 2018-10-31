import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AuthScreen from "./src/components/screens/AuthScreen";
import BirthdayScreen from "./src/components/screens/SignUpScreens/SignUpBirthdayScreen";
import NameScreen from "./src/components/screens/SignUpScreens/SignUpNameScreen";
import EmailScreen from "./src/components/screens/SignUpScreens/SignUpEmailScreen";
import SuccessScreen from "./src/components/screens/SignUpScreens/SignUpSuccessScreen";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import TabNavigator from "./src/components/navigators/tabNavigator";

export default class App extends Component{
  render() {
    return (
      <SwitchNav/>
    );
  }
}

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  Name: NameScreen,
  Email: EmailScreen,
  Birthday: BirthdayScreen,
  Success: SuccessScreen
},{
navigationOptions: {
     header: null
  }
})

const SwitchNav = createSwitchNavigator({
  App: AuthStack,
  Entry: TabNavigator,
},
  {
    initialRouteName: 'App'
  });


