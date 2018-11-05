import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import ExploreScreen from "../screens/ExploreScreens/ExploreScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import TripsScreen from "../screens/TripsScreen";



const TabNavigator = createBottomTabNavigator({
    EXPLORE: ExploreScreen,
    SAVED: SavedScreen,
    TRIPS: TripsScreen,
    INBOX: InboxScreen,
    PROFILE: ProfileScreen
  },
  
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'EXPLORE') {
          iconName = `md-search`;
        } else if (routeName === 'SAVED') {
          iconName = `md-heart`;
        } else if (routeName === 'TRIPS') {
            iconName = `md-plane`;
        } else if (routeName === 'INBOX') {
            iconName = `ios-chatbubbles`;
        } else if (routeName === 'PROFILE') {
            iconName = `md-person`;
        }
  
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
      
    }),
    
    tabBarOptions: {
      activeTintColor: '#ff5252',
      inactiveTintColor: 'gray',
      showLabel: true,
      labelStyle: {
        fontSize: 8,
        marginBottom: 12
      },
      style: {
        height: 50,
    }
    },
    
    
  },{
    initialRouteName: 'Home'
},
  );
  

export default TabNavigator;
