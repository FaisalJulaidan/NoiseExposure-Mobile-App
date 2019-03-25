import React, {Component} from 'react';
import {Button, Icon, Text, View} from 'native-base';
import {sendNoiseDataToServer} from "../utilities";
import CreateAccountModal from '../components/Account/CreateAccountModal';
import LoginModal from "../components/Account/LoginModal";

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
            return "Account"
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
                <LoginModal/>
                <Button
                    onPress={this.sendDataToServer}
                    disabled={this.state.userLoggedIn}
                >
                    <Icon name={'md-sync'}/>
                    <Text>Sync Data</Text>
                </Button>

            </View>
        );
    }
}

export default SettingsScreen
