import React from 'react'
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeNoise from '../.,/pages/HomeNoise';
import SettingsScreen from '../../pages/SettingsScreen';
import DetailsScreen from '../../pages/DetailsScreen';
import HistoryScreen from '../../pages/HistoryScreen';

const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeNoise },
        Details: { screen: DetailsScreen},
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#176381',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home',
        },
    }
);

const App = createBottomTabNavigator(
    {
        Home: { screen : HomeNoise},
        Details: { screen: DetailsScreen},
        History: { screen: HistoryScreen},
        Settings: { screen: SettingsScreen}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-volume-high${focused ? '' : '-outline'}`;
                } else if (routeName === 'Details') {
                    iconName = `material-create${focused ? '' : '-outline'}`;
                } else if (routeName === 'History') {
                    iconName = `material-time${focused ? '' : '-outline'}`;
                } else if (routeName === 'Home') {
                    iconName = `ios-settings${focused ? '' : '-outline'}`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            }
        }),
        tabBarOptions:{
            activeTintColor: '#FFFFFF',
            inactiveTintColor: 'gray'
        }
    }
);

export default createAppContainer(App)