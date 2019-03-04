import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class NoiseLevel extends Component{
    render() {
        return (
            <View>
                <Text style={styles.text_one}>Noise Level:</Text>
                <Text style={styles.noise_level}>50 dB</Text>
            </View>
        );
       
    }
}
const styles = StyleSheet.create({
text_one: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#176381',
  },
  noise_level: {
    fontSize: 50,
    textAlign: 'center',
    margin: 5,
    color: '#176381',
  },
});