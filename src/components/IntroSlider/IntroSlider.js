import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
        text: 'We need to access your microphone to measure noise levels around you.',
        colors: '#A3A1FF',
        image: require('./assets/microphone.png'),
    },
    {
        key: 'Location',
        title: 'Location',
        text: 'We also need to access your location to help us relate noise levels in different areas of the city.',
        colors: '#29ABE2',
        image: require('./assets/location_pin.png'),
    },
];

export default class IntroSlider extends React.Component {

    state = {
        showRealApp: false
    };


    renderItem = (item) => {
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
                    {/*<Text style={styles.text}>{item.width}</Text>*/}
                </View>

            </View>

        );
    };

    renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Ionicons
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };

    onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    };


    render() {
            return <AppIntroSlider
                renderItem={this.renderItem}
                slides={slides}
                onDone={this.onDone}
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