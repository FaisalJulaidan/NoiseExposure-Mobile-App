import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Body, Container, Content, Header, Left, List, Right, StyleProvider, Title} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import {insertNoise} from '../../database/schemas';
import NoiseItem from './NoiseItem/NoiseItem';


class NoiseHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        insertNoise({
            // id: 1, // auto generated
            level: 70.5,
            locationName: 'Queen Street',
            timestamp: new Date(),
            longitude: 1000034.34,
            latitude: 200034.454,
            type: '', 
            details: '',
            deviceModel: 'FJ3453',
            severity: '1',
            isPublic: false,
            isSynced: false
        }).then().catch(error => console.log(error));

        insertNoise({
            // id: 1, // auto generated
            level: 64,
            locationName: 'National Software Academy',
            timestamp: new Date(),
            longitude: -2.998051,
            latitude: 51.589775,
            type: '', 
            details: '',
            deviceModel: 'iPhone 8',
            severity: '1',
            isPublic: false,
            isSynced: false
        }).then().catch(error => console.log(error));

        insertNoise({
            // id: 1, // auto generated
            level: 56,
            locationName: 'Sailsbury Road',
            timestamp: new Date(),
            longitude: -3.173425,
            latitude: 51.48675,
            type: 'Traffic',
            details: 'Heavy traffic caused by Tesco Lorry unloading',
            deviceModel: 'FJ3453',
            severity: '1',
            isPublic: false,
            isSynced: false
        }).then(() => this.props.reloadNoiseData()).catch(error => console.log(error));


    }

    // reloadData = () => {
    //     queryAllNoise().then((noiseList) => {
    //         this.setState({noiseList})
    //     }).catch(error => {
    //         console.log("error in reloading noise history list", error);
    //     });
    //     console.log('reloadData')
    // };

    render() {
        console.log(this.props);
        return (
            <StyleProvider  style={getTheme()}>
                <Container style={styles.container}>
                    <Header noLeft style={styles.header}>
                        <Left/>
                        <Body>
                            <Title>History</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content>
                        <List style={styles.list}>
                            {this.props.noiseList.map((noise, index) => {
                                return <NoiseItem key={index} noiseData={noise}/>
                            })}
                        </List>
                    </Content>
                </Container>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    // header: {
    //     backgroundColor: '#018a99'
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