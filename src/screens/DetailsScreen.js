import React, { Component } from 'react';
import {StyleSheet, TextInput , Picker } from 'react-native';
import {
    Body,
    Button,
    Container,
    Header,
    Left,
    Right,
    StyleProvider,
    Text,
    Title,
    Card,
    CardItem,
    Content,
    View
} from 'native-base';
import getTheme from '../../native-base-theme/components';
import { retriveDataForAdditionalDetails, updateTypeAndDetails } from '../database/schemas';

class DetailsScreen extends Component {
    state = {
        idNoise: '',
        noise: '',
        location: '',
        type: '',
        description: '',
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
        })
    };
    render() {
        return (
            <StyleProvider  style={getTheme()}>
            <Container >
                <Header noLeft>
                        <Left/>
                            <Body>
                                <Title>Noise Details</Title>
                            </Body>
                        <Right />
                </Header>
                <Content style={styles.content}>

                    <Card>
                        <CardItem>
                            <Body>
                            <Text style={styles.normalText}>You can add some extra detail to the last collected noise source here.</Text>
                            <View style={{flexDirection: 'column'}}>
                                <Text style={styles.dataText}>Current Noise Level: {this.state.noise} dB</Text>
                                <Text style={styles.dataText}>Current Location: {this.state.location}</Text>
                            </View>
                            </Body>
                        </CardItem>
                    </Card>

                    <View>
                        <Button
                            primary block
                            style={styles.addBtn}
                            onPress={this.onRetrieve}>
                            <Text>Retrieve Data</Text>
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
                            label = "Please Select an Option..."
                            value = "No Option Chosen" />
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
                            value = "Sporting Event" />
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
                    <View>
                        <Button
                            primary block
                            style={styles.addBtn}
                            onPress={this.onPass}>
                            <Text>Add Details</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
            </StyleProvider>
        );
    }
}
export default DetailsScreen

const styles = StyleSheet.create({
    content: {
        padding: 10,
        position: 'relative'
    },
    addDetails: {
        borderColor: '#176381',
        borderWidth: 2,
        height: 120
    },
    addBtn: {
        marginTop: 20,
    },
    headingText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 2,
        marginBottom: 1
    },
    optionText: {
        fontSize: 15,
        color: 'black',
        marginLeft: 2,
        marginTop: 10
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
        marginLeft: 2,
        fontWeight: 'bold',
        marginBottom: 2
    },
    pickerStyle: {
        borderColor: '#176381',
        borderWidth: 2,
        marginBottom: 2
    }
});
