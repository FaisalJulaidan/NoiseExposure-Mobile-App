import React, { Component } from 'react';
import {StyleSheet, TextInput, Text, View, Picker } from 'react-native';

class DetailsScreen extends Component {
    state = {
        type: '',
        descriptions: ''
    };

    updateType = (type) => {
        this.setState({type : type })
    };
    
    render() {
        return (
            <View>
                <Text>Details SCREEN</Text>
                <Text>Here you can enter information relating to a specific noise level.</Text>

                <Text>Noise Type: </Text>
                <Picker
                    selectedValue={this.state.type}
                    onValueChange={this.updateType}>
                    <Picker.item
                    label = "Construction"
                    value = 'construction' />
                    <Picker.item
                    label = "Sports Event"
                    value = 'sports' />
                    <Picker.item
                    label = "People"
                    value = 'people' />
                    <Picker.item
                    label = "Other"
                    value = 'other' />
                </Picker>
                <Text>Additional Details: </Text>
                <View style={styles.addDetails}>
                    <TextInput
                        onChangeText={(descriptions) => this.setState({descriptions})}
                        value={this.state.descriptions}
                        placeholder={"Enter Additional Information Here"}
                        maxLength = {200}>
                    </ TextInput>
                </View>
            </View>
        );
    }
}
export default DetailsScreen

const styles = StyleSheet.create({
    addDetails: {
        borderRadius: 4,
        borderColor: "#018a99"
    }
})
