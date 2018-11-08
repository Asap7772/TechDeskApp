import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, StyleSheet, Text, View} from 'react-native';

export default class Laptop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Laptop Issues</Text>
        <Text>
          {"\n"}{"\n"}{"\n"}1. Make sure that all of the wires are plugged in as they should be
          {"\n"}{"\n"}2. Try restarting or try having a friend login.
          {"\n"}{"\n"}3. If all else fails, bring it to the Tech Desk at South.{"\n"}{"\n"}{"\n"}{"\n"}
        </Text>
        <Text style={styles.heading}>Chromebook Issues</Text>
        <Text>
          {"\n"}{"\n"}{"\n"}1. Try having a friend login to your computer to see if the problem exists for them as well.
          {"\n"}{"\n"}2. Try restarting by pressing the combination of esc+refresh and the power key for 30 seconds and then see if the problem still pertains.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 125,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24
  },
});
