import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { Button } from 'react-native';
import {sendNoiseDataToServer} from "../utilities";
import CreateAccountModal from '../components/Login/CreateAccountModal';

class SettingsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noise: "_",
            userLoggedIn: false,
        };
    }

    loginBtn = () => {
        if (this.state.userLoggedIn === false) {
            return "Login"
        }
        else{
            return "Log out"
        }
    }
    sendDataToServer = () => {
        const response = sendNoiseDataToServer();

        this.state = {
            noise: response
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text> {this.state.noise} </Text>
                <Text>Settings SCREEN</Text>
                <CreateAccountModal/>
                <Button
                    onPress={this.sendDataToServer}
                    title="Sync Data"
                    disabled={this.state.userLoggedIn}
                />
            </View>
        );
    }
}

export default SettingsScreen
