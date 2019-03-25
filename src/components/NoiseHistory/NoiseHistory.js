import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Header, List} from 'native-base';

import realm, {insertNoise, queryAllNoise} from '../../database/schemas';
import NoiseItem from './NoiseItem/NoiseItem';

class NoiseHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noiseList: [
                {
                    level: 60.5,
                    locationName: 'Queen Street',
                    timestamp: new Date(),
                    longitude: -3.17526,
                    latitude: 51.4821,
                    // type: ''
                    deviceModel: 'FJ3453',
                    severity: '1',
                    isPublic: false,
                    isSynced: false
                }
            ]
        }
    }

    componentWillMount() {
        insertNoise({
            // id: 1, // auto generated
            level: 70.5,
            locationName: 'Queen Street',
            timestamp: new Date(),
            longitude: 1000034.34,
            latitude: 200034.454,
            // type: ''
            deviceModel: 'FJ3453',
            severity: '1',
            isPublic: false,
            isSynced: false
        }).then(value => this.reloadData()).catch(error => console.log(error));
        this.reloadData();
    }

    reloadData = () => {
        queryAllNoise().then((noiseList) => {
            this.setState({noiseList})
        }).catch(error => {
            console.log("error in reloading noise history list", error);
        });
        console.log('reloadData')
    };

    render() {
        const {noiseList} = this.state;
        console.log(realm.path);
        return (
            <Container style={styles.container}>
                <Header style={styles.header}/>
                <Content>
                    <List style={styles.list}>
                        {noiseList.map((noise, index) => {
                            return <NoiseItem key={index} noiseData={noise}/>
                        })}


                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    // header: {
    //     backgroundColor: '#018a99',
    // },
    container: {
        margin: 0,
        paddingLeft: 0,
    },
    list: {
        margin: 0,
        paddingLeft: 0,

    },
});

export default NoiseHistory