import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, StyleSheet, Text, View} from 'react-native';

export default class WiFi extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Wifi Issues</Text>
        <Text>{"\n"}{"\n"}{"\n"}1. Make sure the wifi network is up - try connecting from your phone or asking a friend if the wifi is up for them!
              {"\n"}{"\n"}2. Now that we know that the problem is on your end, make sure that airplane mode is turned off and that wifi is turned on.
              {"\n"}{"\n"}3. If you still can't connect, try restarting your phone and repeating steps 1 and 2.
              {"\n"}{"\n"}4. Try contacting your local Tech Team Member at the High School South Technology Help Desk (in the library) and ask for a certificate for the wifi.
              Alternatively, try installing a vpn such as x-vpn before coming to school.
              {"\n"}{"\n"}5. Your device may be broken - try connecting to your home network; if you cannot connect to that, then you may be in need of a new phone.
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
