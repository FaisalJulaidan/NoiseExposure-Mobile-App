import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import { insertNoise } from './../../database/schemas';

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
        RNSoundLevel.start();
        RNSoundLevel.onNewFrame = (data) => {
            // insertNoise({
            //     // id: 1, // auto generated
            //     level: data.value + 160,
            //     locationName: 'Queen Street',
            //     timestamp: new Date(),
            //     longitude: 1000034.34,
            //     latitude: 200034.454,
            //     // type: ''
            //     deviceModel: 'FJ3453',
            //     isPublic: false,
            //     isSynced: false
            // }).then(value => this.reloadData()).catch(error => console.log(error));
            this.setState({
               noiselevel_data: data 
            })
          //console.log('Sound level info', data)
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
    fontSize: 35,
    margin: 7,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 1
  },
  noise_level: {
    fontSize: 50,
    margin: 1,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 1
  },
  displayBox:{
    backgroundColor: '#018A99',
    opacity: 0.7,
    left: "2%",
    right: "2%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '96%',
    height: '27%',
    top: "2%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute"
  }
});