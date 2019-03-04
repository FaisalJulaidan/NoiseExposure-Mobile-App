import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {};

export default class Location extends Component<Props> {

    constructor(props) {
        super(props);
        this.getLocation(this, props);
    };

    updateLocation = (location) => {
        this.props.updateLocation(location);
    };

    getLocation = ()  => {
        // navigator.geolocation.getCurrentPosition(
        //     //Will give you the current location
        //     (position) => {
        //         //getting the Latitude from the location json
        //         const currentLatitude = JSON.stringify(position.coords.latitude);
        //         //getting the Longitude from the location json
        //         const currentLongitude = JSON.stringify(position.coords.longitude);
        //
        //         //Save Long and Lat into state
        //         that.setState({
        //             location: {
        //                 currentLatitude: currentLongitude,
        //                 currentLongitude: currentLatitude,
        //             }
        //         });
        //
        //         let location = {
        //             currentLatitude: currentLongitude,
        //             currentLongitude: currentLatitude,
        //         };
        //
        //         this.update(location)
        //
        //     },
        //     (error) => alert(error.message),
        //     {
        //         enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
        //     }
        // );

        navigator.geolocation.watchPosition((position) => {
            const currentLatitude = position.coords.latitude;
            const currentLongitude = position.coords.longitude;

            let location = {
                currentLatitude: currentLatitude,
                currentLongitude: currentLongitude,
            };

            this.updateLocation(location)
        });
    };

    render() {
        return (
            <View>
            </View>
        );
    }
}
