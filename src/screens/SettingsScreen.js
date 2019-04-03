import React, {Component} from 'react';
import {
    Body,
    Button,
    Card,
    CardItem,
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
import {asyncStorage, EMAIL_KEY, MAP_THEME_KEY, sendNoiseDataToServer} from "../utilities";
import getTheme from '../../native-base-theme/components';
import SeverityKey from '../components/NoiseInfo/NoiseInfo'
import {StyleSheet, ToastAndroid} from "react-native";


class SettingsScreen extends Component {

    state = {
        darkThemeToggle: false,
        asyncStorageNotLoaded: true,
        userLoggedIn: false,
        email: ''
    };

    constructor(props) {
        super(props);
        console.log(this.props);

        // Get email to check if user is logged in.
        asyncStorage.retrieveData(EMAIL_KEY).then((value) => {
            console.log("Key returned : " + value);
            this.setState({
                userLoggedIn: true,
                email: value
            });
        }).catch(error => {
            console.log("Error getting Key" + error);
            this.setState({
                userLoggedIn: false,
            });
        });

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

    // Set login State based on successful login
    setLoginState = (success, email) => {
        console.log('Ha ha HA ');
        this.setState({
            userLoggedIn: success,
            email: email
        });
    };

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
            ToastAndroid.show('Theme Set to ' + value, ToastAndroid.LONG);
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

                    <Content style={styles.content}>
                        <Card style={styles.loginCard}>
                            <CardItem>
                                <Body style={styles.loginCardText}>
                                    {this.state.userLoggedIn === false ?
                                        <Text>No User logged in</Text>
                                        :
                                        <Text>Logged in as: {this.state.email}</Text>
                                    }
                                </Body>
                            </CardItem>
                        </Card>

                        <CreateAccountModal userLoggedIn={this.state.userLoggedIn}/>
                        <LoginModal userLoggedIn={this.state.userLoggedIn} setLoginState={this.setLoginState}/>
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
                        <Card style={styles.loginCard}>
                            <CardItem header style={styles.cardHeader} >
                                <Text>Enable Dark Theme Map</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                <Text>
                                    (Change on App Restart)
                                </Text>

                                </Body>
                                <Right>
                                    <Switch
                                        style={styles.switch}
                                        onValueChange = {this.changeMapTheme}
                                        value = {this.state.darkThemeToggle}
                                        disabled={this.state.asyncStorageNotLoaded}
                                    />
                                </Right>
                            </CardItem>

                        </Card>
                        <Text> </Text>

                    </Content>

                </Container>
            </StyleProvider>
            </Root>

        );
    }
}


const styles = StyleSheet.create({
    content: {
        padding: 10,
    },
    loginCard: {
        marginBottom: 20,
    },
    loginCardText: {
        position: 'relative',
        alignItems: 'center'
    },
    switch: {
        alignItems: 'flex-end'
    },
    cardHeader: {
        paddingBottom: -3,
    }
});
export default SettingsScreen
