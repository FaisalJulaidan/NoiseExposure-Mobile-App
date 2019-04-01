import React, {Component, Fragment} from 'react';
import {Modal, StyleSheet} from 'react-native';
import { Body,
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
    View} from "native-base";
import {createAccountToServer} from "../../utilities";

export default class LoginModal extends Component{
  state = {
    modelOpen: false,
    email: '',
    password: '',
  };

  openLogin = () => this.setState({
    modelOpen: true
  });

  closeLogin = () => this.setState({
    modelOpen: false
  });

  createAccount = () => {
      createAccountToServer(this.state.email, this.state.password).then( response => {
      console.log(response);
      console.log(this.state.email, this.state.password);
      return response
          
      }).catch(error =>  {
          return Alert.alert( " Failed to create account, sign up again");
      })
  };


    render() {
        return (
          <Fragment>
            <Modal
                animationType="fade"
              visible={this.state.modelOpen}
              onRequestClose={this.closeLogin}
              transparent={true}>
              <View style={styles.modalContainer}>
                  <Header noLeft style={styles.HeaderStyle}>
                      <Left/>
                      <Body>
                      <Title>Create Account</Title>
                      </Body>
                      <Right />
                  </Header>
                  <Form>
                      <Item floatingLabel
                            style={styles.InputsStyle}>
                          <Label>Email</Label>
                          <Input
                              onChangeText={(email) => this.setState({email})}
                              value={this.state.email}
                          />
                      </Item>

                      <Item floatingLabel
                            style={styles.InputsStyle}>
                          <Label>Password</Label>
                          <Input
                              onChangeText={(password) => this.setState({password})}
                              value={this.state.password}
                          />
                      </Item>
                  </Form>
                  <Text style={styles.disclaimer}>DISCLAIMER:
                      You are required to have an account to make data public.</Text>


                <Button block primary
                    onPress={this.createAccount}
                    style={styles.CreateAccountButton}>
                  <Icon name='md-person-add' />
                  <Text>Create</Text>
                </Button>

                <Button block primary
                        onPress={this.closeLogin}
                        style={styles.CloseButton}>
                  <Icon name='ios-close-circle-outline' />
                  <Text>Close</Text>
                </Button>
              </View>
            </Modal>
            <Button block primary
                    onPress={this.openLogin}
                    disabled={this.state.userLoggedIn}
            >
              <Icon name={'md-person-add'}/>
              <Text>Create Account</Text>
            </Button>
          </Fragment>
        );
    }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: 'white',
  },
  disclaimer: {
    color: '#018a99',
    fontSize: 15,
      fontWeight: 'bold',
      fontStyle: 'italic',
    marginTop: 15,
      marginLeft: 22,
      marginRight: 22,
      textAlign: 'center'
  },
    CreateAccountButton:{
        position: 'relative',
        marginTop: 20,
        marginLeft: 22,
        marginRight: 22
    },
    CloseButton:{
        marginLeft: 22,
        marginRight: 22
    },
    InputsStyle: {
        marginLeft: 22,
        marginRight: 22
    }

})