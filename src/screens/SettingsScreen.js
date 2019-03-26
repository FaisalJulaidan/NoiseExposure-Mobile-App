import React, {Component} from 'react';
import {Body, Button, Container, Content, Header, Icon, Left, Right, StyleProvider, Text, Title} from 'native-base';
import {sendNoiseDataToServer} from "../utilities";
import CreateAccountModal from '../components/Account/CreateAccountModal';
import LoginModal from "../components/Account/LoginModal";
import getTheme from '../../native-base-theme/components';

class SettingsScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            noise: "_",
            userLoggedIn: false,
        };
    }

    loginBtn = () => {
        if (this.state.userLoggedIn === false) {
            return "Account"
        }
        else{
            return "Log out"
        }
    }
    sendDataToServer = () => {
        const response = sendNoiseDataToServer();

        this.state = {
            noise: response
        }
    };

    render() {
        return (
            <StyleProvider  style={getTheme()}>
                {/*<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>*/}
                <Container>
                    <Header noLeft>
                        <Left/>
                        <Body>
                        <Title>Settings</Title>
                        </Body>
                        <Right />
                    </Header>

                    <Content style={{padding: 10}}>
                        <Text> {this.state.noise} </Text>
                        <Text>Settings SCREEN</Text>
                        <CreateAccountModal/>
                        <LoginModal/>
                        <Button primary
                                onPress={this.sendDataToServer}
                                disabled={this.state.userLoggedIn}
                        >
                            <Icon name={'md-sync'}/>
                            <Text>Sync Data</Text>
                        </Button>
                    </Content>

                </Container>
            </StyleProvider>

        );
    }
}

export default SettingsScreen
