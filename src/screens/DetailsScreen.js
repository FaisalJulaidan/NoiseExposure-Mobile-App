import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, Picker, Button, ToastAndroid } from 'react-native';

class DetailsScreen extends Component {
    state = {
        type: '',
        descriptions: ''
    };

    updateType = (type) => {
        this.setState({type : type })
    };

    onPass = () => {
        ToastAndroid.show('Successfully Added!', ToastAndroid.SHORT)
    };
    render() {
        return (
            <View>
                <Text style={styles.headingText}>Noise Details</Text>
                <Text style={styles.normalText}>Here you can enter information relating to a specific noise level.</Text>

                <Text style={styles.optionText}>Noise Type: </Text>
                <View style={styles.pickerStyle}>
                    <Picker
                        selectedValue={this.state.type}
                        onValueChange={this.updateType}>
                        <Picker.item
                        label = "Construction"
                        value = "Construction" />
                        <Picker.item
                        label = "Traffic"
                        value = "Traffic" />
                        <Picker.item
                        label = "Transportation"
                        value = "Transportation" />
                        <Picker.item
                        label = "Wildlife/Nature"
                        value = "Wildlife/Nature" />
                        <Picker.item
                        label = "Sports Event"
                        value = "Sports Event" />
                        <Picker.item
                        label = "People"
                        value = "People" />
                        <Picker.item
                        label = "Industrial"
                        value = "Industrial" />
                        <Picker.item
                        label = "Other"
                        value = "Other" />
                    </Picker>
                </View>
                <Text style={styles.optionText}>Additional Details: </Text>
                <View style={styles.addDetails}>
                    <TextInput
                        onChangeText={(descriptions) => this.setState({descriptions})}
                        value={this.state.descriptions}
                        placeholder={"Enter Additional Information Here"}
                        maxLength = {200}
                        multiline={true}
                        fontSize={15}
                        >
                    </ TextInput>
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
        color: '#176381',
        marginBottom: 5,
        height: "40%"
    },
    addBtn: {
        width: '30%',
        right: '5%',
        left: '65%'
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: '2%',
        marginBottom: '3%'  
    },
    optionText: {
        fontSize: 20,
        color: 'black',
        marginLeft: '2%',
        marginBottom: '2%'  
    },
    normalText: {
        fontSize: 15,
        color: 'black',
        marginLeft: '2%',
        marginBottom: '5%'  
    },
    pickerStyle: {
        width: '96%',
        right: '2%',
        left: '2%',
        borderColor: '#176381',
        borderWidth: 2,
        marginBottom: '2%'
    }
})
