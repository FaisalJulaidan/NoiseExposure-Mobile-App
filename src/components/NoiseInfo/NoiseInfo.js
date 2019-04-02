import React, {Component, Fragment} from 'react';
import {Modal, StyleSheet} from 'react-native';
import { Body,
    Button,
    Header,
    Icon,
    Left,
    Right,
    Text,
    Title,
    View,
    Footer} from "native-base";

export default class LoginModal extends Component{
  state = {
    modelOpen: false,
  };

  openSeverity = () => this.setState({
    modelOpen: true
  });

  closeLogin = () => this.setState({
    modelOpen: false
  });

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
                      <Title>Noise Info</Title>
                      </Body>
                      <Right />
                  </Header>
                    <Text style={styles.infoText}>
                          Exposure to high noise levels for a long periods of time can have serious effects on health, on both Humans and Wildlife.
                          This appication aims to educate users on the issues with noise and which noises can have an adverse effect on health.  
                          To do this, we have a severity scale to indicate how dangerous these sounds are to human hearing. 
                    </Text>
                    <Text style={styles.infoText}>
                          This scale is as follows: {"\n"}
                        <Text style = {{color: '#1AB518', fontWeight: 'bold'}}>
                          Normal
                          <Text style = {{color: 'black', fontWeight: 'normal'}}>
                            : {"\n"}Between 0dB and 70dB - These Sounds are not damaging to your hearing.{"\n"}  
                          </Text>
                        </Text>
                        <Text style = {{color: '#FFE400', fontWeight: 'bold'}}>
                          Warning
                          <Text style = {{color: 'black', fontWeight: 'normal'}}>
                            : {"\n"}Between 70dB and 110dB - Damage to hearing is a possibility if exposed for a long amount of time.{"\n"}
                          </Text>
                        </Text>
                        <Text style = {{color: '#FF0000', fontWeight: 'bold'}}>
                          Dangerous
                          <Text style = {{color: 'black', fontWeight: 'normal'}}>
                            : {"\n"}Above 110dB - Damage to hearing will occur after short exposure to sounds.
                          </Text>
                        </Text>
                    </Text>
                    <Text style={styles.infoText}>
                          {/* {"\n"} */}
                          Additionally, this application aims to educate the user by providing some comparrisons of the current noise source to 
                          known and recorded levels.  This will be displayed on the homepage. 
                        </Text>
                    {/* <Button block primary
                      onPress={(Linking.openURL('http://www.industrialnoisecontrol.com/comparative-noise-examples.htm'))}>
                      <Text>Noise Comparrison</Text>
                    </Button> */}
                    <Footer>
                      <Button 
                        style={styles.footer}
                        block primary
                        onPress={this.closeLogin}>
                          <Icon name='ios-close-circle-outline' />
                          <Text>Close</Text>
                      </Button>
                    </Footer>
              </View>
            </Modal>
            <Button block primary
                onPress={this.openSeverity}>
                <Icon name={'md-list'}/>
                <Text>Noise Info</Text>
            </Button>
          </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: '#176381',
    },
    InputsStyle: {
        marginLeft: 22,
        marginRight: 22
    },
    infoText: {
        left: '2%',
        right: '2%',
        marginBottom: '1%',
        marginTop: '1%',
        width: '96%',
        fontSize: 15,
        backgroundColor: '#DAFFF4',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    footer: {
      height: '100%',
      width: '100%'
    }
})