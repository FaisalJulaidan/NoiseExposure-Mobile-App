import React, {Component} from 'react';
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    Icon,
    Left,
    Right,
    Root,
    StyleProvider,
    Switch,
    Text,
    Title
} from 'native-base';
import CreateAccountModal from '../components/Account/CreateAccountModal';
import LoginModal from "../components/Account/LoginModal";
import {asyncStorage, MAP_THEME_KEY, sendNoiseDataToServer} from "../utilities";
import getTheme from '../../native-base-theme/components';
import SeverityKey from '../components/NoiseInfo/NoiseInfo'


class SettingsScreen extends Component {

    state = {
        darkThemeToggle: false,
        asyncStorageNotLoaded: true
    };

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            userLoggedIn: false,
        };
        // asyncStorage.storeData(MAP_THEME_KEY, 'light').then((value) => {
        //
        // }).catch((error) => {
        //
        // });

        // Call the Async Storage to get MapThemeKey Value
        asyncStorage.retrieveData(MAP_THEME_KEY).then((value) => {
            console.log("Key returned : " + value);
            if (value === 'dark') {
                this.setState({
                    darkThemeToggle: true,
                    asyncStorageNotLoaded: false
                });
            } else if (value === 'light') {
                this.setState({
                    darkThemeToggle: false,
                    asyncStorageNotLoaded: false
                });
            }
        }).catch(error => {
            console.log("Error getting Key" + error);
            this.setState({
                darkThemeToggle: false,
                asyncStorageNotLoaded: false
            });
        });

    }

    // Method to set the Map theme in local storage
    changeMapTheme = (value) => {
        // Set Value in state
        this.setState({
            darkThemeToggle: value
        });

        let mapTheme;

        if (value === true) {
            mapTheme = 'dark';
            console.log("theme toggle to dark");

        } else if (value === false) {
            mapTheme = 'light';
            console.log("theme toggle to light");
        }

        asyncStorage.storeData(MAP_THEME_KEY, mapTheme).then((value) => {
            console.log(MAP_THEME_KEY + " " + value + " : Key Stored");
        }).catch(err => console.log('There was an error:' + err))
    };

    sendDataToServer = () => {
        sendNoiseDataToServer();
    };

    render() {
        return (
            <Root>
            <StyleProvider  style={getTheme()}>
                {/*<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>*/}
                <Container>
                    <Header noLeft>
                        <Left/>
                        <Body>
                        <Title>Settings</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{padding: 10}}>
                        <CreateAccountModal/>
                        <LoginModal/>
                        <Button block primary
                                onPress={this.sendDataToServer}
                                disabled={!this.state.userLoggedIn}
                        >
                            <Icon name={'md-sync'}/>
                            {this.state.userLoggedIn === false ?
                                <Text>Login To Sync data</Text>
                                :
                                <Text>Sync Data</Text>
                            }
                        </Button>
                        <SeverityKey />
                        <Text>Enable Dark Theme Map (Change on App Restart)</Text>
                        <Switch
                            onValueChange = {this.changeMapTheme}
                            value = {this.state.darkThemeToggle}
                            disabled={this.state.asyncStorageNotLoaded}
                        />
                    </Content>

                </Container>
            </StyleProvider>
            </Root>

        );
    }
}

export default SettingsScreen
