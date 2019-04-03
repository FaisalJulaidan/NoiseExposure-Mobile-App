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
    CardItem,
    Card,
    Content,
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

                  <Content style={styles.content}>
                      <Card style={styles.loginCard}>
                          <CardItem>
                              <Body>
                              <Text style={styles.infoText}>
                                  Exposure to high noise levels for a long periods of time can have serious effects on health, on both Humans and Wildlife.
                                  This application aims to educate users on the issues with noise and which noises can have an adverse effect on health.
                                  To do this, we have a severity scale to indicate how dangerous these sounds are to human hearing.

                                  This scale is as follows:
                              </Text>

                              </Body>
                          </CardItem>
                      </Card>

                      <Card>
                          <CardItem>
                              <CardItem header style={styles.cardHeader} >
                                  <Text style = {{color: '#1AB518', fontWeight: 'bold'}}>
                                      Normal
                                  </Text>
                              </CardItem>
                              <Body>
                              <Text style = {{color: 'black', fontWeight: 'normal'}}>
                                  Between 0dB and 70dB - These Sounds are not damaging to your hearing.
                              </Text>


                              </Body>
                          </CardItem>
                      </Card>

                      <Card>
                          <CardItem>
                              <CardItem header style={styles.cardHeader} >
                                  <Text style = {{color: '#FFE400', fontWeight: 'bold'}}>
                                      Warning
                                  </Text>
                              </CardItem>
                              <Body>
                              <Text style = {{color: 'black', fontWeight: 'normal'}}>
                                  Between 70dB and 110dB - Damage to hearing is a possibility if exposed for a long amount of time.
                              </Text>


                              </Body>
                          </CardItem>
                      </Card>

                      <Card>
                          <CardItem>
                              <CardItem header style={styles.cardHeader} >
                                  <Text style = {{color: '#FF0000', fontWeight: 'bold'}}>
                                      Dangerous
                                  </Text>
                              </CardItem>
                              <Body>
                              <Text style = {{color: 'black', fontWeight: 'normal'}}>
                                  Above 110dB - Damage to hearing will occur after short exposure to sounds.
                              </Text>


                              </Body>
                          </CardItem>
                      </Card>

                      <Card>
                          <CardItem>
                              <Body>
                              <Text style={styles.infoText}>
                                  {/* {"\n"} */}
                                  Additionally, this application aims to educate the user by providing some comparisons of the current noise source to
                                  known and recorded levels.  This will be displayed on the homepage.
                              </Text>


                              </Body>
                          </CardItem>
                      </Card>

                        {/* <Button block primary
                          onPress={(Linking.openURL('http://www.industrialnoisecontrol.com/comparative-noise-examples.htm'))}>
                          <Text>Noise Comparrison</Text>
                        </Button> */}

                          <Button
                            block primary
                            onPress={this.closeLogin}>
                              <Icon name='ios-close-circle-outline' />
                              <Text>Close</Text>
                          </Button>
                  </Content>
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
    content: {
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: '#FFFFFF'
    },
    infoText: {
        fontSize: 15,
    }
});