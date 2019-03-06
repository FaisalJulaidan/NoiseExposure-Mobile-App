import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, View } from 'native-base';
import NoiseHistory from '../components/NoiseHistory/NoiseHistory';

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NoiseHistory/>
            </View>
        );
    }
}

export default HistoryScreen
