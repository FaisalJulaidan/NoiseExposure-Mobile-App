import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import Map from "../components/Map/Map";
import {Platform} from "react-native";
import {requestLocationPermission} from "../components/Map/PermissionsRequest";

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            //this.callLocation(that);
        } else {
            // requestLocationPermission();
        }
    };

    render() {
        return (
            <View style={{ flex: 1}}>
                <Map/>
            </View>
        );
    }
}

export default HomeScreen
