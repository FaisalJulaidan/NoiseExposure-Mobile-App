import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import Slider from 'react-native-slider'
import { insertNoise } from './../../database/schemas';

export default class NoiseLevel extends Component{
    state = {
        noiselevel_data: {  
                id:0,             // frame number
                value: -160,       // sound level in decibels, -160 is a silence level
                rawValue:0        // raw level value, OS-dependent
        },
        currentSeverity: '',
        comparedTo: '',
        colour: ''
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
            this.getSeverityLevel()
            this.setComparedTo()
        }
      };
    componentWillUnmount() {
      RNSoundLevel.stop()
    };

    getSeverityLevel = () => {
      if ((this.state.noiselevel_data.value + 160) < 80){
        this.setState({
          currentSeverity: <Text style={styles.normal}>Normal</Text>
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 81) && ((this.state.noiselevel_data.value + 160) < 120)){
        this.setState({
          currentSeverity: <Text style={styles.warning}>Warning</Text>
        })
      }
      if ((this.state.noiselevel_data.value + 160) >= 121){
        this.setState({
          currentSeverity: <Text style={styles.dangerous}>Dangerous</Text>
        })
      } 
    };

    currentColour = () => {
      if ((this.state.noiselevel_data.value + 160) < 70){
        this.setState({
          colour: '#1AB518'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 71) && ((this.state.noiselevel_data.value + 160) < 110)){
        this.setState({colour: '#FFE400'})
      }
      if ((this.state.noiselevel_data.value + 160) >= 111){
        this.setState({colour: '#FF0000'})
      } 
    };

    setComparedTo = () => {
      if (((this.state.noiselevel_data.value + 160) >= 0) && ((this.state.noiselevel_data.value + 160) <= 20)){
        this.setState({
          comparedTo: 'Someone Breathing or Whispering'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 21) && ((this.state.noiselevel_data.value + 160) <= 40)){
        this.setState({
          comparedTo: 'Quiet Rural areas or Bird Calls'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 41) && ((this.state.noiselevel_data.value + 160) <= 50)){
        this.setState({
          comparedTo: 'Libraries'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 51) && ((this.state.noiselevel_data.value + 160) <= 70)){
        this.setState({
          comparedTo: 'Normal Conversation or Background Music'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 71) && ((this.state.noiselevel_data.value + 160) <= 80)){
        this.setState({
          comparedTo: 'Normal Traffic or Vaccum Cleaners'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 81) && ((this.state.noiselevel_data.value + 160) <= 90)){
        this.setState({
          ccomparedTo: 'Railway Noise or Rubbish disposal'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 91) && ((this.state.noiselevel_data.value + 160) <= 100)){
        this.setState({
          comparedTo: 'Lawn Mower or Motorbike'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 101) && ((this.state.noiselevel_data.value + 160) <= 120)){
        this.setState({
          comparedTo: 'Live Rock Concert'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 121) && ((this.state.noiselevel_data.value + 160) <= 140)){
        this.setState({
          comparedTo: 'Thunder'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 141)){
        this.setState({
          comparedTo: 'Jet taking off'
        })
      }   
    }

    render() {
        return (
          <View style={styles.displayBox}>
            <View>
                <Text style={styles.textOne}>Current Noise Level:</Text>
                <Text style={styles.noiseLevel}>{this.state.noiselevel_data.value + 160} dB</Text>
                <View>
                  <Slider
                      minimumValue={0}
                      maximumValue={160}
                      step={1}
                      value={this.state.noiselevel_data.value + 160}
                      disabled={true}
                      minimumTrackTintColor='#04FF00'
                      maximumTrackTintColor='#FF0000'
                      thumbTintColor='#FFFFFF'
                      >
                  </Slider>
                </View>
                <Text style={styles.severityText}>Current Noise Severity: {this.state.currentSeverity}</Text>
                <Text style={styles.severityText}>Noise Level Comparable to: {this.state.comparedTo}</Text>             
            </View>
          </View>
        );
    }
}
const styles = StyleSheet.create({
textOne: {
    fontSize: 35,
    margin: 7,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8
  },
  noiseLevel: {
    fontSize: 45,
    margin: 1,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 1
  },
  severityText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: '1%'
  },
  displayBox:{
    backgroundColor: '#176381',
    opacity: 1,
    left: "2%",
    right: "2%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '96%',
    top: "2%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute"
  },
  sliderStyle:{
    backgroundColor: '#FFFFFF'
  },
  normal: {
    color: '#1AB518',
    fontWeight: 'bold'
  },
  warning: {
    color: '#FFE400',
    fontWeight: 'bold'
  },
  dangerous: {
    color: '#FF0000',
    fontWeight: 'bold'
  }
});