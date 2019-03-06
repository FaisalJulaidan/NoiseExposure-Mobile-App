import React, {Component} from 'react';
import {Text, View} from 'react-native';

type Props = {};

export default class Location extends Component<Props> {

    // Location Access inspired from https://aboutreact.com/react-native-geolocation/

    constructor(props) {
        super(props);
        this.getLocation(this, props);
    };

    updateLocation = (location) => {
        this.props.updateLocation(location);
    };

    getLocation = ()  => {
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                const currentLatitude = position.coords.latitude;
                const currentLongitude = position.coords.longitude;

                let location = {
                    currentLatitude: currentLatitude,
                    currentLongitude: currentLongitude,
                };

                this.updateLocation(location)

            },
            (error) => alert(error.message),
            {
                enableHighAccuracy: true, timeout: 20000, maximumAge: 1000
            }
        );

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
