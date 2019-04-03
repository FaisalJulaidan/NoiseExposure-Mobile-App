import React, {Component} from 'react';
import {Body, Left, ListItem, Text} from 'native-base';
import {StyleSheet} from "react-native";
import {severityData} from "../../../utilities";

class NoiseItem extends Component {
    render() {
        const {noiseData, text} = this.props;
        const {timestamp} = noiseData; // date
        // time hh:mm:ss
        const time = timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
        return (
            <ListItem thumbnail style={styles.item}>

                <Left>
                    <Text style={[styles.noiseLevel, {color: severityData(noiseData.level).severityColour}]} >
                        {Math.round(noiseData.level)}
                        <Text>dB</Text>
                    </Text>
                </Left>

                <Body style={styles.info}>
                    <Text>{noiseData.locationName}</Text>
                    <Text note numberOfLines={1}>{noiseData.timestamp.toDateString()}</Text>
                    <Text note numberOfLines={1}>{time}</Text>
                    <Text note numberOfLines={1}>Severity: {severityData(noiseData.level).severityName}</Text>
                    {noiseData.type !== '' ?
                        <Text note numberOfLines={1}>Noise Type: {noiseData.type}</Text>
                        :
                        <Text note>Unknown Noise Type</Text>
                    }
                    {noiseData.details !== '' ?
                        <Text note numberOfLines={3}>Additional Details: {noiseData.details}</Text>
                    :
                        <Text note>No Additional Details Added</Text>
                    }
                </Body>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EAEAEA',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    noiseLevel: {
        fontSize: 50,
    },
    info: {
        marginLeft: 20,
        borderBottomWidth: undefined,
    },
    viewBtn: {
        borderBottomWidth: undefined,
    },
});


export default  NoiseItem;