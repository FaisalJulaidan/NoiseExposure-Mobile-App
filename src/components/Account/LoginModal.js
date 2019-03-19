import React, {Component} from 'react';
import {Modal, Text, View, Button, TextInput, Alert} from 'react-native';
import {validateUserDetails} from "../../utilities";


class LoginModal extends Component {
    state = {
        modalVisible: false,
        Email: "",
        Password: ""
    };

Validation = () => {
    let response = validateUserDetails(this.state.Email, this.state.Password); //Setting the response to the method in synchronisation. Passing through the state of the email and password set in this class.
    if(response.status === 200){ //if the response status is a success, #####TO DO
    }else {
        return Alert.alert(" Account isn't found") //if not send an alert
    }

};


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal {/* Modal Preferences */}
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <TextInput
                            onChangeText={(Email) => this.setState({Email})} {/* changing the state of the Email object to whatever is in the TextInput */}
                            value={this.state.Email}
                            placeholder={"Enter Email Here"}>
                            </TextInput>

                            <TextInput {/* Password text input */}
                            onChange={(Password) => this.setState({Password})} {/* changing the state of the password object to whatever is in the TextInput */}
                            value={this.state.Password}
                            placeholder={"Enter Password Here"}>
                            </TextInput>

                            <Button title={"Log In"} {/* 'Login Button' */}
                                    onPress={this.Validation}/> {/* Calling the validation method */}

                            <Button {/* 'Cancel' login Button, setting the state back to the default state */}
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }} title={"Cancel"}
                            />
                        </View>
                    </View>
                </Modal>


                <Button {/* This is the button that displays the modal when you press it */}
                    onPress={() => {
                        this.setModalVisible(true);
                    }} title={"Login"}>
                </Button>
            </View>
        );
    }
}

export default LoginModal
