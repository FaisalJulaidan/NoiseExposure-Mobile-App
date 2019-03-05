import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pages Imports
import HomeScreen from './src/screens/HomeScreen.js';
import HistoryScreen from './src/screens/HistoryScreen.js';
import SettingsScreen from './src/screens/SettingsScreen.js';
import DetailsScreen from './src/screens/DetailsScreen.js';

const TabNavigator = createBottomTabNavigator({
    // Pages for Navigation Bar
    Home: HomeScreen,
    "Details Screen": DetailsScreen,
    "History Screen" : HistoryScreen,
    Settings: SettingsScreen,
},
{
    // Navigation Styles
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            // Icon Styling
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-volume-high`;
            } else
                if (routeName === 'Details Screen') {
                iconName = `md-create`;
            } else if (routeName === 'History Screen') {
                iconName = `ios-time`;
            } else if (routeName === 'Settings') {
                iconName = `ios-settings`;
            }
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} margin={100} />;
        },

    }),
    // Tab Bar Styling
    tabBarOptions: {
        labelStyle: {
            paddingBottom: 6,
        },
        style: {
            backgroundColor: '#018a99',
            height: 62,
        },
        activeTintColor: '#ffffff',
        inactiveTintColor: '#c2c2c2',
    },
});

export default createAppContainer(TabNavigator);




