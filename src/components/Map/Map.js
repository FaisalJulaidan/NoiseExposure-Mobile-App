import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import Location from "./Location";

type Props = {};
export default class Map extends Component<Props> {

    state = {
        region: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    getNewLocation = (location) => {
        console.log(location);
        this.setState({
            region: {
                latitude: location.currentLatitude,
                longitude: location.currentLongitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        });
    };

    render() {
        return (
            <View style = {styles.container}>
                <Location updateLocation = {this.getNewLocation}/>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    // onRegionChange={this.onRegionChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        position:'absolute',
        top:10,
        left:0,
        right:0,
        bottom:0,
    },
});