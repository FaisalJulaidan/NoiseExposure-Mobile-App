import React, {Component} from 'react';
import {Alert, Modal, StyleSheet} from 'react-native';
import {validateUserDetails} from "../../utilities";
import {Button, Form, Icon, Input, Item, Label, StyleProvider, Text, View} from 'native-base';
import getTheme from '../../../native-base-theme/components';


class LoginModal extends Component {
    state = {
        modalVisible: false,
        Email: "",
        Password: ""
    };

Validation = () => {
    console.log(this.state.Email, this.state.Password);
    validateUserDetails(this.state.Email, this.state.Password).then(function (response) { //response will return with a status code or a key
        console.log(response);
        return response //returning the response

    }).catch(function (error) { //error handling if the post rejects
        console.log(error);
        return Alert.alert(" Email or Password doesn't match OR the account doesn't exist") //if not send an alert
    })
};


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <StyleProvider  style={getTheme()}>
                <View>
                    <Modal
                        animationType="fade"
                        transparent={false}
                        visible={this.state.modalVisible}>
                        <View style={{margin: 22}}>
                                <Form>
                                    <Item floatingLabel>
                                        <Label>Email</Label>
                                        <Input
                                            onChangeText={(Email) => this.setState({Email})}
                                            value={this.state.Email}
                                        />

                                    </Item>
                                    <Item floatingLabel>
                                        <Label>Password</Label>
                                        <Input
                                            onChangeText={(Password) => this.setState({Password})}
                                            value={this.state.Password}
                                        />
                                    </Item>
                                </Form>

                                <Button block primary
                                        onPress={this.Validation}
                                        style= {styles.LoginButton}>
                                    <Icon name='md-log-in'/>
                                    <Text>Log In</Text>
                                </Button>



                                <Button block primary
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                        style= {styles.LoginButton}>
                                    <Icon name='ios-close-circle-outline'/>
                                    <Text>Cancel</Text>
                                </Button>
                        </View>
                    </Modal>


                    <Button block primary
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                        <Icon name='md-log-in'/>
                        <Text>Log In</Text>

                    </Button>
                </View>
            </StyleProvider>
        );
    }
}

const styles = StyleSheet.create({
    LoginButton:{
        color: 'red',
        padding: 10

    }
});

export default LoginModal
