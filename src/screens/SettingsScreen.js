import React, { Component } from 'react';
import { Text, View, Switch } from 'native-base';
import {Button} from 'react-native';
import {MAP_THEME_KEY, retrieveData, sendNoiseDataToServer, storeData} from "../utilities";

class SettingsScreen extends Component {

    state = {
        darkThemeToggle: false,
        asyncStorageNotLoaded: true
    };

    constructor(props) {
        super(props);

        // Call the Async Storage to get MapThemeKey Value
        retrieveData(MAP_THEME_KEY).then((value) => {
            if (value === 'dark') {
                this.setState( {
                    darkThemeToggle: true,
                    asyncStorageNotLoaded: false
                });
            } else if (value === 'light') {
                this.setState( {
                    darkThemeToggle: false,
                    asyncStorageNotLoaded: false
                });
            }
        }).catch((error) => {
            console.log(error);
            this.setState( {
                asyncStorageNotLoaded: true
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

        storeData(MAP_THEME_KEY, mapTheme).then((value) => {

        }).catch((error) => {

        });
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
                <Text>Enable Dark Theme </Text>
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
