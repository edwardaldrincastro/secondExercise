import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Profile Screen </Text>
        <Button title="Log Out" onPress={() => this.props.navigation.navigate('App')}/>
      </View>
    );
  }
}

export default ProfileScreen;
