import React, { Component } from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native';
import {queryAllNoise, insertNoise} from '../../database/schemas';
import realm from '../../database/schemas';

class NoiseHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noiseList: []
        }
    }

    componentWillMount() {
        insertNoise({
            // id: 1, // auto generated
            level: 60.5,
            timestamp: new Date(),
            longitude: 1000034.34,
            latitude: 200034.454,
            // type: ''
            deviceModel: 'FJ3453',
            isPublic: false,
            isSynced: false
        }).then(value => this.reloadData()).catch(error => console.log(error));
        this.reloadData();
    }

    reloadData = () => {
        queryAllNoise().then((noiseList) => {
            console.log(noiseList[0].level);
            this.setState({noiseList})
        }).catch(error => {
            console.log("error in reloading noise history list", error);
        });
        console.log('reloadData')
    };

    render() {
        console.log(realm.path);
        return (<View>
            <Text>Noise History</Text>
            {/*<FlatList*/}
                {/*style={styles.flatList}*/}
                {/*data={this.state.noiseList}*/}
                {/*renderItem={} />*/}
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    flatList: {
        flex: 1,
        flexDirection: 'column',
    }
});

export default NoiseHistory