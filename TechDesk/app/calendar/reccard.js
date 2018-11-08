import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  View,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
const { dwidth, dheight } = Dimensions.get("window");
export default class RecCard extends React.Component {
  render() {
    return (
      <View style={{ ...styles.card }}>
        <View style={styles.matchpercent}>
          <Text style={styles.odds}>95%</Text>
        </View>
        <View style={styles.cardcontain}>
          <Image style={styles.cardimg} source={require("../img/icon.png")} />
        </View>
        <View style={styles.placename}>
          <Text style={styles.placetext}>{this.props.data.title}</Text>
        </View>
        <View style={styles.timeto}>
          <Text style={styles.minsaway}>{this.props.data.orgname}</Text>
        </View>
        <View style={styles.cardbar} />
        <TouchableOpacity style={styles.confirmvol} onPress={this.props.callDetails}>
          <Text style={styles.touchtext}>Details »</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var circleSize = 45;

const styles = StyleSheet.create({
  textcontain: {
    flexDirection: "row"
  },

  cardbar: {
    width: "100%",
    backgroundColor: "#262626",
    height: 1,
    marginBottom: 8
  },

  categoryimg: {
    width: 50,
    height: 50,
    marginBottom: 6
  },

  cardshow: {
    flexDirection: "row"
  },

  matchpercent: {
    position: "absolute",
    backgroundColor: "#3261ad",
    opacity: 0.7,
    width: circleSize,
    height: circleSize,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: circleSize,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 100,
    top: 0,
    left: 0
  },

  odds: {
    color: "white",
    left: 6,
    top: 9,
    fontSize: 15
  },

  confirmvol: {
    width: "90%",
    height: 40,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "#4471ba",
    justifyContent: "center"
  },

  touchtext: {
    textAlign: "center",
    color: "white",
    fontWeight: "100",
    fontSize: 17
  },

  minsaway: {
    textAlign: "center",
    fontWeight: "200",
    fontSize: 15,
    color: "#e0e0e0"
  },

  placetext: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
    fontFamily: Platform.select({ ios: undefined, android: "sans-serif-light" }),
  },

  placename: {
    position: "absolute",
    width: "100%",
    height: 30,
    backgroundColor: "rgba(33, 101, 150, 0.7)",
    top: 60
  },

  cardcontain: {
    overflow: "hidden",
    borderTopRightRadius: 8
  },

  cardimg: {
    width: "100%",
    height: 90
  },

  timeto: {
    backgroundColor: "#526d99",
    height: 25,
    justifyContent: "center"
  },

  card: {
    // width: 145 * 1.09,
    // height: 165 * 1.09,
    width: 210,
    height: 190,
    marginLeft: 30,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#6982aa",
    shadowRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowColor: "black",
    transform: [{ scale: 1 }]
  },

  fortext: {
    color: "#d6d6d6",
    marginTop: 0,
    marginBottom: 20,
    backgroundColor: "#2E3133",
    fontSize: 30,
    width: "60%",
    marginLeft: "17%",
    fontWeight: "200",
    fontFamily: Platform.select({
      ios: undefined,
      android: "sans-serif-light"
    }),
    textAlign: "center"
  }
});
