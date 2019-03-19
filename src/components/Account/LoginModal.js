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

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={this.state.modalVisible}>
                    <View style={{marginTop: 22}}>
                        <View>


                            <TextInput
                            onChangeText={(Email) => this.setState({Email})}
                            value={this.state.Email}
                            placeholder={"Enter Email Here"}>
                            </TextInput>


                            <TextInput
                            onChange={(Password) => this.setState({Password})}
                            value={this.state.Password}
                            placeholder={"Enter Password Here"}>
                            </TextInput>

                            <Button title={"Log In"}
                                    onPress={this.Validation}/>


                            <Button
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }} title={"Cancel"}
                            />
                        </View>
                    </View>
                </Modal>


                <Button
                    onPress={() => {
                        this.setModalVisible(true);
                    }} title={"Login"}>
                </Button>
            </View>
        );
    }
}

export default LoginModal
