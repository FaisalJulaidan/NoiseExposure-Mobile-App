import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import HomeScreen from '../../screens/HomeScreen.js';
import HistoryScreen from '../../screens/HistoryScreen.js';
import SettingsScreen from '../../screens/SettingsScreen.js';
import DetailsScreen from '../../screens/DetailsScreen.js';
import {createAppContainer, createStackNavigator} from 'react-navigation';


const RootStack = createStackNavigator(
    {
        Noise: HomeScreen,
        Details: DetailsScreen,
        History: HistoryScreen,
        Settings: SettingsScreen
    },
    {
        initialRouteName: 'Noise'
    });

const AppContainer = createAppContainer(RootStack);


class NavigationMenu extends Component{
    render(){
        return (
                <Footer>
                    <FooterTab
                        style={{ backgroundColor: '#176381'}}>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate('Noise')}>
                            <Icon name="ios-volume-high" />
                            <Text>Noise</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate('Details')}>
                            <Icon active name="ios-create" />
                            <Text>Add Details</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate('History')}>
                            <Icon name="ios-time" />
                            <Text>History</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => this.props.navigation.navigate('Settings')}>
                            <Icon name="ios-settings" />
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}

export default NavigationMenu(AppContainer)