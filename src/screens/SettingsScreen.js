import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Icon, Text, View } from 'native-base';
import { Button } from 'react-native';
import {getNoiseData, sendNoiseDataToServer} from "../utilities/synchronisation";

class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noise: "_"
        };
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
                <Button
                    onPress={this.sendDataToServer}
                    title="Sync Data"
                />
            </View>
        );
    }
}

export default SettingsScreen
