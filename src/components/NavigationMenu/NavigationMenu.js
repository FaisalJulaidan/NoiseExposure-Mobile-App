import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class NavigationMenu extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#176381'}}>
                </Header>
                <Content />
                <Footer>
                    <FooterTab
                        style={{ backgroundColor: '#176381'}}>
                        <Button vertical >
                            <Icon name="ios-volume-high" />
                            <Text>Noise</Text>
                        </Button>
                        <Button vertical active style={{backgroundColor: '#176381'}}>
                            <Icon active name="ios-create" />
                            <Text>Add Details</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="ios-time" />
                            <Text>History</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="ios-settings" />
                            <Text>Settings</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}