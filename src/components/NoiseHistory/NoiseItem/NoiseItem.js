import React, { Component } from 'react';
import {ListItem, Text, Left, Body, Right, Button } from 'native-base';
import {StyleSheet} from "react-native";
class NoiseItem extends Component {
    render() {
        const {noiseData, text} = this.props;
        const {timestamp} = noiseData; // date
        // time hh:mm:ss
        const time = timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
        return (
            <ListItem thumbnail style={styles.item}>

                <Left>
                    <Text style={styles.noiseLevel}>
                        {Math.round(noiseData.level)}
                        <Text>dB</Text>
                    </Text>
                </Left>

                <Body style={styles.info}>
                <Text>{noiseData.locationName}</Text>
                <Text note numberOfLines={1}>{noiseData.timestamp.toDateString()}</Text>
                <Text note numberOfLines={1}>{time}</Text>
                </Body>

                {/*<Right style={styles.viewBtn}>*/}
                    {/*<Button transparent>*/}
                        {/*<Text>View</Text>*/}
                    {/*</Button>*/}
                {/*</Right>*/}
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#EAEAEA',
        padding: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 25,
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