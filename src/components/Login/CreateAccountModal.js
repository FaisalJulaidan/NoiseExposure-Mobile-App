import React, { Component, Fragment } from 'react';
import {Modal, Text, View, Button, StyleSheet} from 'react-native';

export default class LoginModal extends Component{
  state = {
    modelOpen: false
  };

  openLogin = () => this.setState({
    modelOpen: true
  });

  closeLogin = () => this.setState({
    modelOpen: false
  });

    render() {
        return (
          <Fragment>
            <Modal
              visible={this.state.modelOpen}
              onRequestClose={this.closeLogin}
              transparent={true}>
              <View style={styles.modalContainer}>
                <Text style={styles.heading}>Create Account</Text>
                <Text style={styles.disclaimer}>Disclaimer: You are required to have an account to make data public.</Text>
                <View style={styles.btnLayout}>
                  <Button 
                    onPress={this.closeLogin}
                    title={"Close"}>
                  </Button>
                  <Button 
                    onPress={this.closeLogin}
                    title={"Create"}>
                  </Button>
                </View>
              </View>
            </Modal>
            <Button 
            onPress={this.openLogin}
            title={"Create Account"}></Button>
          </Fragment>    
        );
    }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderColor: "#018a99",
    backgroundColor: 'white',
    borderWidth: 2,
    marginHorizontal: 60,
    marginVertical: 120,
    height: 150
  },
  heading: {
    color: '#018a99',
    fontSize: 20,
    marginTop: 5,
  },
  disclaimer: {
    color: '#018a99',
    fontSize: 10,
    left: 5,
    marginTop: 15
  },
  btnLayout: {
    flexDirection:'row',
    marginLeft: 10
  }
})