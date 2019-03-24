import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Ionicons from 'react-native-vector-icons/Ionicons';


const slides = [
    {
        key: 'somethun',
        title: 'Quick setup, good defaults',
        text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
        icon: 'ios-images-outline',
        colors: '#63E2FF',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun1',
        title: 'Super customizable',
        text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
        icon: 'ios-options-outline',
        colors: '#A3A1FF',
        backgroundColor: '#59b2ab',
    },
    {
        key: 'somethun2',
        title: 'No need to buy me beer',
        text: 'Usage is all free',
        icon: 'ios-beer-outline',
        colors: '#29ABE2',
        backgroundColor: '#59b2ab',
    },
];

export default class IntroSlider extends React.Component {

    state = {
        showRealApp: false
    };


    renderItem = (item) => {
        return (
            <View style={styles.mainContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
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
                renderDoneButton={this.renderDoneButton}
                renderNextButton={this.renderNextButton}
            />;
    }
}

const styles = StyleSheet.create({
    slide: {

    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#018a99',
    },

    text: {
        // color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 22,
        // color: 'white',
        backgroundColor: 'transparent',
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
        width: 320,
        height: 320,
    }
});