import React, { Component } from 'react';
import {sendNoiseDataToServer} from "../utilities";
import CreateAccountModal from '../components/Account/CreateAccountModal';
import LoginModal from "../components/Account/LoginModal";
import { Text, View, Switch } from 'native-base';
import {Button} from 'react-native';
import {asyncStorage, MAP_THEME_KEY, sendNoiseDataToServer} from "../utilities";

class SettingsScreen extends Component {

    state = {
        darkThemeToggle: false,
        asyncStorageNotLoaded: true
    };

    constructor(props) {
        super(props);

        this.state = {
            noise: "_",
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

    loginBtn = () => {
        if (this.state.userLoggedIn === false) {
            return "Account"
        }
        else{
            return "Log out"
        }
    }
    sendDataToServer = () => {
        sendNoiseDataToServer();
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text> {this.state.darkThemeToggle.valueOf()} </Text>
                <Text>Settings SCREEN</Text>
                <CreateAccountModal/>
                <LoginModal/>
                <Button
                    onPress={this.sendDataToServer()}
                    title="Sync Data"
                    disabled={this.state.userLoggedIn}
                />
                <Text>Enable Dark Theme For Map (Changes on Restart)</Text>
                <Switch
                    onValueChange = {this.changeMapTheme}
                    value = {this.state.darkThemeToggle}
                    disabled={this.state.asyncStorageNotLoaded}
                />
            </View>
        );
    }
}

export default SettingsScreen
