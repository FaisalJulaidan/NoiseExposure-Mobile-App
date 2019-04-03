import React, { Component } from 'react';
import { View } from 'native-base';
import NoiseHistory from '../components/NoiseHistory/NoiseHistory';

class HistoryScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NoiseHistory reloadNoiseData={this.props.reloadNoiseData} noiseList={this.props.noiseList}/>
            </View>
        );
    }
}

export default HistoryScreen
