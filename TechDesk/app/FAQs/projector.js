import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Button, NavigatorIOS, StyleSheet, Text, View} from 'react-native';

export default class Projector extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Projector Issues</Text>
          <Text>
            {"\n"}{"\n"}{"\n"}1. Make sure that the power cord is properly connected to a functional AC electrical outlet and that the other end is correctly attached to the projector. A standby light should display on the projector once these steps are performed correctly and the outlet’s power is turned on.
            {"\n"}{"\n"}2. Check all your cable connections between your projector and computer to ensure that they’re properly connected.
            {"\n"}{"\n"}3. If your projector is plugged into a multi-plug adapter then be sure to check that it’s turned on.
            {"\n"}{"\n"}4. Make sure that you have removed the lens cap at the front of the projector.
            {"\n"}{"\n"}5. Verify that the projector isn’t in standby mode.
            {"\n"}{"\n"}6. If the projector still doesn’t display an image then restart the computer.
            {"\n"}{"\n"}7. Unplug the cable from your computer and check its display. When you reconnect the projector, remember to turn the computer and monitor off before you power up the projector. Always power the equipment back up in this order: projector, monitor, computer.
            {"\n"}{"\n"}8. If you’re using a laptop and it isn’t displaying your presentation, ensure that you’ve activated your laptop’s external video output.
            {"\n"}{"\n"}9. Mac computers require a specific power-up sequence - the projector must be turned on before you turn on the computer.
            {"\n"}{"\n"}10. If your laptop’s battery is running low then put it on charge before plugging it into your projector so you don’t lose connection mid-session.
          </Text>
        </View>
      </ScrollView>
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
    marginTop: 75,
    marginBottom: 100,
    marginLeft: 20,
    marginRight: 20
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24
  },
});
