/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginScreen from './app/login/login';
import { createStackNavigator } from 'react-navigation';
import MyCalendar from "./app/calendar/calendar";
import FAQ from "./app/FAQs/faq";
import WiFi from "./app/FAQs/wifi";
import Laptop from "./app/FAQs/laptop";
import Projector from "./app/FAQs/projector";

const appControl = createStackNavigator(
  {
    login: LoginScreen,
    MyCalendar: MyCalendar,
    faq: FAQ,
    WiFi: WiFi,
    Laptop: Laptop,
    Projector: Projector
  },
  {
    initialRouteName: 'faq',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default appControl;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//
// });
