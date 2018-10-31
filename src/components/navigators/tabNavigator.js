import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";
import ExploreScreen from "../screens/ExploreScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SavedScreen from "../screens/SavedScreen";
import TripsScreen from "../screens/TripsScreen";



const TabNavigator = createBottomTabNavigator({
    Explore: ExploreScreen,
    Saved: SavedScreen,
    Trips: TripsScreen,
    Inbox: InboxScreen,
    Profile: ProfileScreen
  },
  
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Explore') {
          iconName = `md-search`;
        } else if (routeName === 'Saved') {
          iconName = `md-heart`;
        } else if (routeName === 'Trips') {
            iconName = `md-plane`;
        } else if (routeName === 'Inbox') {
            iconName = `ios-chatbubbles`;
        } else if (routeName === 'Profile') {
            iconName = `md-person`;
        }
  
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={24} color={tintColor} />;
      },
      
    }),
    
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: true,
      style: {
        height: 50
    }
    },
    
    
  },{
    initialRouteName: 'Home'
},
  );
  

export default TabNavigator;
