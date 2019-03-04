import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./DetailsScreen";
import HistoryScreen from "./HistoryScreen";
import SettingsScreen from "./SettingsScreen";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>NOISE SCREEN</Text>
            </View>
        );
    }
}

export default HomeScreen
