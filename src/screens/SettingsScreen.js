import React, { Component } from 'react';
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
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text> {this.state.darkThemeToggle.valueOf()} </Text>
                <Text>Settings SCREEN</Text>
                <Button
                    onPress={this.sendDataToServer()}
                    title="Sync Data"
                    disabled={false}
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
