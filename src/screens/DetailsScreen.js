import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, Picker, Button, ToastAndroid } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';
import { retriveDataForAdditionalDetails, updateTypeAndDetails } from '../database/schemas';

class DetailsScreen extends Component {
    state = {
        type: '',
        description: '',
        idNoise: '',
        noise: '',
        location: ''
    };
    onPass = () => {
        const {type, description, idNoise} = this.state
        updateTypeAndDetails(idNoise, type, description).then(() => this.props.reloadNoiseData());
        this.setState({
            idNoise: '',
            noise: '',
            location: '',
            type: '',
            description: ''
        });
        ToastAndroid.show('Successfully Added!', ToastAndroid.SHORT);
    };
    onRetrieve = () => {
        retriveDataForAdditionalDetails().then((noiseFirst) => {
            this.setState({
                idNoise: noiseFirst.id,
                noise: noiseFirst.level,
                location: noiseFirst.locationName,
                type: noiseFirst.type,
                description: noiseFirst.details
            }).catch(error => {
                console.log("error data not retrieved")
            });
            ToastAndroid.show('Successfully Retrieved!', ToastAndroid.SHORT)
        })
    };
    render() {
        return (
            <View>
                <Header noLeft>
                        <Left/>
                            <Body>
                                <Title>Noise Details</Title>
                            </Body>
                        <Right />
                </Header>
                <Text style={styles.normalText}>You can add some extra detail to the last collected noise source here.</Text>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.dataText}>Current Noise Level: {this.state.noise} dB</Text>
                    <Text style={styles.dataText}>Current Location: {this.state.location}</Text>
                </View>
                <View style={styles.addBtn}>
                    <Button
                        onPress={this.onRetrieve}
                        color={'#176381'}
                        title={"Retrieve"}>
                    </Button>
                </View>
                <Text style={styles.optionText}>Noise Type: </Text>
                <View style={styles.pickerStyle}>
                    <Picker
                        selectedValue={this.state.type}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({type: itemValue})
                        }>
                        <Picker.Item
                        label = "Please select an option ..."
                        value = "option" />
                        <Picker.Item
                        label = "Construction"
                        value = "Construction" />
                        <Picker.Item
                        label = "Traffic"
                        value = "Traffic" />
                        <Picker.Item
                        label = "Event"
                        value = "Event" />
                        <Picker.Item
                        label = "Transportation"
                        value = "Transportation" />
                        <Picker.Item
                        label = "Wildlife/Nature"
                        value = "Wildlife/Nature" />
                        <Picker.Item
                        label = "Sports Event"
                        value = "Sports Event" />
                        <Picker.Item
                        label = "People"
                        value = "People" />
                        <Picker.Item
                        label = "Industrial"
                        value = "Industrial" />
                        <Picker.Item
                        label = "Other"
                        value = "Other" />
                    </Picker>
                </View>
                <Text style={styles.optionText}>Additional Details: </Text>
                <View style={styles.addDetails}>
                    <TextInput
                        onChangeText={(description) => this.setState({description})}
                        value={this.state.description}
                        placeholder={"Enter Additional Information Here"}
                        maxLength = {200}
                        multiline={true}>
                    </TextInput>
                </View>
                <View style={styles.addBtn}>
                    <Button
                        color={'#176381'}
                        title={"Add Details"}
                        onPress={this.onPass}>
                    </Button>
                </View>
            </View>
        );
    }
}
export default DetailsScreen

const styles = StyleSheet.create({
    addDetails: {
        borderColor: '#176381',
        borderWidth: 2,
        left: '2%',
        right: '2%',
        width: '96%',
        marginBottom: '2%',
        height: "22%"
    },
    addBtn: {
        width: '30%',
        right: '5%',
        left: '65%'
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '2%',
        marginBottom: '1%'  
    },
    optionText: {
        fontSize: 15,
        color: 'black',
        marginLeft: '2%',
        marginBottom: '2%'  
    },
    normalText: {
        fontSize: 15,
        color: 'black',
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '3%'  
    },
    dataText:{
        fontSize: 15,
        color: 'black',
        marginLeft: '2%',
        fontWeight: 'bold',
        marginBottom: '2%'
    },
    pickerStyle: {
        width: '96%',
        right: '2%',
        left: '2%',
        borderColor: '#176381',
        borderWidth: 2,
        marginBottom: '2%'
    },
    header: {
        backgroundColor: '#018a99',
    },
})
