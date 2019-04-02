import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, ToastAndroid} from 'react-native';
import {validateUserDetails} from "../../utilities";
import {
    Body,
    Button,
    Form,
    Header,
    Icon,
    Input,
    Item,
    Label,
    Left,
    Right,
    StyleProvider,
    Text,
    Title,
    Toast,
    View
} from 'native-base';
import getTheme from '../../../native-base-theme/components';
import CreateAccountModal from "./CreateAccountModal";

// Icons using ionicons
// https://ionicons.com/cheatsheet.html

class LoginModal extends Component {
    state = {
        modalVisible: false,
        Email: "",
        Password: "",
    };



        Validation = () => {
            console.log(this.state.Email, this.state.Password);
            validateUserDetails(this.state.Email, this.state.Password).then((response) => { //response will return with a status code or a key
                console.log(response);
                ToastAndroid.show('Successfully Logged in!', ToastAndroid.LONG); //confirming the login is successful to the user
                this.setModalVisible(!this.state.modalVisible); //closing the modal when logged in.
                return response //returning the response


            }).catch((error) => { //error handling if the post rejects
                console.log(error);
                return ToastAndroid.show('Error Logging in, Please try again!', ToastAndroid.LONG); //if not send an alert
                // Alert.alert("Didn't work, try again")
            })
        };

        setModalVisible = (visible) => {
            this.setState({modalVisible: visible});
        };




        render() {
            return (
                <StyleProvider  style={getTheme()}>
                    <View>
                        <Modal
                            animationType="fade"
                            transparent={false}
                            visible={this.state.modalVisible}>
                            <View style={{margin: 22}}>

                                <Header noLeft style={styles.HeaderStyle}>
                                    <Left/>
                                    <Body>
                                    <Title>Login</Title>
                                    </Body>
                                    <Right />
                                </Header>

                                <Form>
                                    <Item floatingLabel
                                          Style={styles.emailtext}>
                                        <Label>Email</Label>
                                        <Input
                                            onChangeText={(Email) => this.setState({Email})}
                                            value={this.state.Email}
                                        />
                                    </Item>

                                    <Item floatingLabel
                                          style={styles.passwordtext}>
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
                                        style= {styles.CancelButton}>
                                    <Icon name='ios-close-circle-outline'/>
                                    <Text>Cancel</Text>
                                </Button>
                                <Text style={styles.CreateAccountText}> Don't have an account? Create one here:</Text>
                                <CreateAccountModal style={styles.CreateAccountButton}/>

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
    HeaderStyle:{
      position: 'relative',
        marginLeft: -22,
        marginRight: -22,
        marginTop: -22

    },
    LoginButton:{
        position: 'relative',
        marginTop: 20,
    },
    CancelButton:{
        position: 'relative',
    },
    emailtext: {
        position: 'relative',
        padding: 20
    },
    passwordtext:{
        position: 'relative',
    },
    CreateAccountButton:{
        position: 'relative',
    },
    CreateAccountText:{
        position: 'relative',
        padding: 20,
        marginLeft: 25,
        color: '#018a99'
    }
});



export default LoginModal
