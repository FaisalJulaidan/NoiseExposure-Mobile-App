import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import Map from "../components/Map/Map";

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Map/>
            </View>
        );
    }
}

export default HomeScreen
