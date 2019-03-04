import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
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
            }
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
                    customMapStyle={mapStyle}
                    // onRegionChange={this.onRegionChange}
                >
                    <Marker
                        coordinate={{latitude: this.state.region.latitude, longitude: this.state.region.longitude}}
                        title="You Are Here"
                        description="Here is where you are"
                    />
                </MapView>

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
        top:200,
        left:0,
        right:0,
        bottom:0,
    },
});

const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f5f5"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#bdbdbd"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#67ff3d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#757575"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#616161"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e5e5e5"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c9c9c9"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9e9e9e"
            }
        ]
    }
];