import React, { Component } from "react";

import styles from "./style";
import {Image, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, StatusBar, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class LoginScreen extends Component {

  static navigationOptions = {
    title: "Profile",
    tabBarColor: "#7fa4e0",
    tabBarIcon: <Ionicons name="md-person" size={25} color="white" />,
    shifting: true
  };

  render() {
    return (
      <View style={styles.containerView} behavior="padding">

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 320, height: 180}}
                source={require('../img/techdesknewflat.png')} />
              </View>
              <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Login"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
  );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {

  }

}
