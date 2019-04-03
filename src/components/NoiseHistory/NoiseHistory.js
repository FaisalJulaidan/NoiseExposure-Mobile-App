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
        this.props.reloadNoiseData()
    }

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