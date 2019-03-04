import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';

export default class NoiseLevel extends Component{
    state = {
        noiselevel_data: {  
                id:0,             // frame number
                value:0,       // sound level in decibels, -160 is a silence level
                rawValue:0        // raw level value, OS-dependent
        }
    }

    componentDidMount() {
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
            this.setState({
               noiselevel_data: data 
            })
          console.log('Sound level info', data)
        }
      }
      // don't forget to stop it
      componentWillUnmount() {
        RNSoundLevel.stop()
      }

    render() {
        return (
            <View>
                <Text style={styles.text_one}>Current Noise Level:</Text>
                <Text style={styles.noise_level}> dB</Text>
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