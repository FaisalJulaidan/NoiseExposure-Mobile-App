import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNSoundLevel from 'react-native-sound-level';
import Slider from 'react-native-slider'
import { insertNoise } from './../../database/schemas';
import {location, severityData} from "../../utilities";

export default class NoiseLevel extends Component{
    state = {
        noiselevel_data: {  
                id:0,             // frame number
                value: -160,       // sound level in decibels, -160 is a silence level
                rawValue:0        // raw level value, OS-dependent
        },

        noiselevel_fast: {
            id:0,             // frame number
            value: -160,       // sound level in decibels, -160 is a silence level
            rawValue:0        // raw level value, OS-dependent
        },
        currentSeverity: '',
        comparedTo: '',

        noiseRecord: null,
    };

    currentLocation = null

    getLocation = ()  => {
        navigator.geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                // console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHH");
                // console.log(position)

                this.currentLocation = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }
            },

        );
    };


    componentWillMount() {
        let newNoiseRecord = null
        RNSoundLevel.start();
        RNSoundLevel.onNewFrame = (data) => {
            this.setState({noiselevel_fast: data});
            this.getSeverityLevel();
            this.setComparedTo();
        };

        this.interval_1 = setInterval(() => {
            this.setState({noiselevel_data: this.state.noiselevel_fast});
        }, 900);


        this.interval_2 = setInterval(() => {
            this.getLocation();


            let level =  this.state.noiselevel_data.value + 160;
            console.log(severityData(level).severityNo + "");

            if(this.currentLocation) {
                newNoiseRecord = {
                    // id: 1, // auto generated
                    level: level,
                    locationName: '',
                    timestamp: new Date(),
                    latitude:  this.currentLocation.lat,
                    longitude: this.currentLocation.long,
                    type: '',
                    details: '',
                    deviceModel: 'FJ3453',
                    severity: severityData(level).severityNo + "",
                    isPublic: false,
                    isSynced: false
                };

                insertNoise(newNoiseRecord).then(value =>  {console.log("Inserted"); this.props.reloadNoiseData()})
                    .catch(error => console.log(error));
            }
        }, 15000);



      };
    componentWillUnmount() {
      RNSoundLevel.stop();
      this.interval_1.clear();
      this.interval_2.clear();
    };

    getSeverityLevel = () => {
      if ((this.state.noiselevel_data.value + 160) < 70){
        this.setState({
          currentSeverity: <Text style={styles.normal}>Normal</Text>
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 71) && ((this.state.noiselevel_data.value + 160) < 110)){
        this.setState({
          currentSeverity: <Text style={styles.warning}>Warning</Text>
        })
      }
      if ((this.state.noiselevel_data.value + 160) >= 111){
        this.setState({
          currentSeverity: <Text style={styles.dangerous}>Dangerous</Text>
        })
      } 
    };

    setComparedTo = () => {
      if (((this.state.noiselevel_data.value + 160) >= 0) && ((this.state.noiselevel_data.value + 160) <= 20)){
        this.setState({
          comparedTo: 'Breathing or Whispering'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 21) && ((this.state.noiselevel_data.value + 160) <= 40)){
        this.setState({
          comparedTo: 'Bird Calls'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 41) && ((this.state.noiselevel_data.value + 160) <= 50)){
        this.setState({
          comparedTo: 'Libraries'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 51) && ((this.state.noiselevel_data.value + 160) <= 70)){
        this.setState({
          comparedTo: 'Normal Conversation'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 71) && ((this.state.noiselevel_data.value + 160) <= 80)){
        this.setState({
          comparedTo: 'Normal Traffic'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 81) && ((this.state.noiselevel_data.value + 160) <= 90)){
        this.setState({
          comparedTo: 'Railway Noise'
        })
      }
      if (((this.state.noiselevel_data.value + 160) >= 91) && ((this.state.noiselevel_data.value + 160) <= 100)){
        this.setState({
          comparedTo: 'Motorbikes'
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
    opacity: 0.8
  },
  severityText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginBottom: 5
  },
  displayBox:{
    backgroundColor: '#176381',
    opacity: 0.8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    position: "relative",
    justifyContent: 'flex-start',
    width: '92%',
    marginRight: '4%',
    marginLeft: '4%',
    top: 15
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