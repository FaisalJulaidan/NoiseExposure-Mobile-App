import React from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import HomeScreen from './HomeScreen.js';
import HistoryScreen from './HistoryScreen.js';
import SettingsScreen from './SettingsScreen.js';
import DetailsScreen from './DetailsScreen.js';
import { TabNavigator } from 'react-navigation'
import { Button, Text, Icon, Footer, FooterTab} from 'native-base'


export default (MainScreenNavigator = TabNavigator(
    {
        Noise: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
        History: { screen: HistoryScreen },
        Settings: { screen: SettingsScreen }
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props => {
        return (
                <Footer>
                    <FooterTab
                        style={{ backgroundColor: '#176381'}}>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate('Noise')}
                            active={props.navigationState.index === 0}>
                            <Icon name="ios-volume-high" />
                            <Text>Noise</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate('Details')}
                            active={props.navigationState.index === 1}>
                            <Icon active name="ios-create" />
                            <Text>Add Details</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate('History')}
                            active={props.navigationState.index === 2}>
                            <Icon name="ios-time" />
                            <Text>History</Text>
                        </Button>
                        <Button
                            vertical
                            onPress={() => props.navigation.navigate('Settings')}
                            active={props.navigationState.index === 3}>
                            <Icon name="ios-settings" />
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
        );
    }
}
);
