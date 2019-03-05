import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
/**
 * - AppSwitchNavigator
 *    - WelcomeScreen
 *      - Login Button
 *      - Sign Up Button
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - FeedStack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import MainScreenNavigator from './src/screens/index'
class App extends Component {
  render() {
    return < MainScreenNavigator />;
  }
}
export default App;

