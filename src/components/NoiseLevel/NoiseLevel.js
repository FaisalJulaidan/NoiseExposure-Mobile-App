import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';

export default class NoiseLevel extends Component{
    state = {
        noiselevel_data: {  
                id:0,             // frame number
                value: -160,       // sound level in decibels, -160 is a silence level
                rawValue:0        // raw level value, OS-dependent
        }
    }
    
    //https://www.npmjs.com/package/react-native-sound-level
    componentDidMount() {
        RNSoundLevel.start()
        RNSoundLevel.onNewFrame = (data) => {
            this.setState({
               noiselevel_data: data 
            })
          console.log('Sound level info', data)
        }
      }
      componentWillUnmount() {
        RNSoundLevel.stop()
      }

    render() {
        return (
            <View style = {styles.displayBox}>
                <Text style={styles.text_one}>Current Noise Level:</Text>
                <Text style={styles.noise_level}>{this.state.noiselevel_data.value + 160} dB</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
text_one: {
    fontSize: 30,
    margin: 5,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  noise_level: {
    fontSize: 40,
    margin: 1,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  displayBox:{
    backgroundColor: '#018A99',
    opacity: 0.9,
    top: -200,
    left: 0,
    right: 0,
  }
});