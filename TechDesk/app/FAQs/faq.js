import React, {Component} from "react";
import {
  createStackNavigator,
} from 'react-navigation';
import {
  Image,
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  StatusBar,
  KeyboardAvoidingView, StyleSheet, NavigatorIOS
} from 'react-native';
import {Button} from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import WiFi from "./wifi";
import Laptop from './laptop';
import Projector from './projector';
import PropTypes from 'prop-types';

export default class FAQ extends Component {

  static navigationOptions = {
    title: "Profile",
    tabBarColor: "#7fa4e0",
    tabBarIcon: <Ionicons name="md-person" size={25} color="white" />,
    shifting: true
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <View style={styles.assistText}>
            <Text style={styles.heading}>How may we assist you?</Text>
          </View>
          <Button buttonStyle={styles.button} onPress={() => navigate('WiFi')} title="Wi-Fi connection" />
          <Button buttonStyle={styles.button} onPress={() => navigate('Laptop')} title="Laptop/Chromebook" />
          <Button buttonStyle={styles.button} onPress={() => navigate('Projector')} title="Projector Connection" />
          <View style={styles.center}>
            <Image style={styles.logo} source={require('../img/techdesknewflat.png')} />
          </View>
        </View>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

}

const styles = StyleSheet.create({
  assistText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50
  },
  button: {
    backgroundColor: '#f8c146',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginBottom: 25
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    textAlignVertical: "center"
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24
  },
  logo: {
    marginTop: 25,
    width: 320,
    height: 180
  }
});
