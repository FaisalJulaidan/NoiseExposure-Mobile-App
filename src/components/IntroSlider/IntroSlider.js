import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Permissions from 'react-native-permissions'



const slides = [
    {
        key: 'Welcome',
        title: 'Welcome',
        text: 'Be part of making out city quieter again',
        colors: '#63E2FF',
        image: require('./assets/cardiff_council_logo.jpg'),
    },
    {
        key: 'Microphone',
        title: 'Microphone',
        permission:'microphonePermission',
        text: 'We need to access your microphone and local storage to measure and store noise levels around you.',
        image: require('./assets/microphone.png'),
    },
    {
        key: 'Storage',
        title: 'Storage',
        permission:'storagePermission',
        text: 'We also need to access your location to help us relate noise levels in different areas of the city.',
        image: require('./assets/storage.png'),
    },
    {
        key: 'Location',
        title: 'Location',
        permission:'locationPermission',
        text: 'Finally, we also need to access your location to help us relate noise levels in different areas of the city.',
        image: require('./assets/location_pin.png'),
    },

];

export default class IntroSlider extends React.Component {

    state = {
        microphonePermission: "unauthorized",
        locationPermission: "unauthorized",
        storagePermission: "unauthorized",
    };



    componentWillMount() {
        Permissions.checkMultiple(['location', 'microphone', 'storage']).then(response => {
            //response is an object mapping type to permission
                this.setState({
                    locationPermission: response.location,
                    microphonePermission: response.microphone,
                    storagePermission: response.storage
                }, () => this.forceUpdate());

        })
    }


    renderItem = (item) => {

        // set dynamic color for the permission status text in each slide item.
        // console.log(' RENDER ITEM!');
        // console.log(this.state[item.permission]);

        let permissionTextColor = 'red';
        if (this.state[item.permission] === 'authorized')
            permissionTextColor = 'green';

        return (

            <View style={[styles.slide, {
                paddingTop: item.topSpacer,
                paddingBottom: item.bottomSpacer,
                width: item.width,
                height: item.height
            }]}
            >

                <View style={styles.mainContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.text}>{item.text}</Text>

                    {/*{item.permission ?*/}
                        {/*<Text style={{color: permissionTextColor, textAlign: 'center'}}>*/}
                            {/*{this.state[item.permission]}!*/}
                        {/*</Text> : null*/}
                    {/*}*/}
                </View>
            </View>

        );
    };


    onSlideChange = (index, lastIndex) => {

        const {locationPermission, microphonePermission, storagePermission} = this.state;

        // index 1 represents the microphone and storage slide
        if(index === 1 && microphonePermission !== "authorized") {
            Permissions.request('microphone').then(response => {
                // Returns once the user has chosen to 'allow' or to 'deny' access
                // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
                this.setState({microphonePermission: response})
            });
        }

        // index 2 represents the storage slide
        else if (index === 2) {
            if (storagePermission !== "authorized")
                Permissions.request('storage').then(response => {
                    this.setState({storagePermission: response})

                });
        }

        // index 3 represents the location slide
        else if (index === 3) {
            if (locationPermission !== "authorized")
                Permissions.request('location').then(response => {
                    this.setState({locationPermission: response})
                });
        }
    };

    onDone = () => {
       this.props.onFirstLaunchDone()
    };


    render() {
        console.log(this.state);
            return <AppIntroSlider
                renderItem={this.renderItem}
                slides={slides}
                onDone={this.onDone}
                onSlideChange={this.onSlideChange}
                bottomButton
                buttonStyle={styles.bottomBtn}
                activeDotStyle={styles.activeDot}
                dotStyle={styles.dot}
                paginationStyle={styles.pagination}
            />;
    }
}

const styles = StyleSheet.create({
    slide: {
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    mainContent: {
        width: '80%',
        height: '70%',
        padding: 30,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },

    bottomBtn: {
        marginTop: 40,
        backgroundColor: '#176381',
    },

    pagination: {
        fontSize: 2
    },

    dot: {
        backgroundColor:'#A8ABAC',

    },

    activeDot: {
        backgroundColor:'#176381',
    },

    text: {
        color: '#176381',
        textAlign: 'center',
        // paddingHorizontal: 20,
    },

    title: {
        color: '#176381',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: 160,
        height: 160,
    }
});