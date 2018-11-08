import React, {Component} from "react";
import {
  Linking,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  View,
  WebView
} from "react-native";
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import Ionicons from "react-native-vector-icons/Ionicons";
import RecCard from "./reccard";
import moment from 'moment';

let calendarTheme = {
  backgroundColor: "#2E3133",
  calendarBackground: "#2E3133",
  textSectionTitleColor: "#b6c1cd",
  selectedDayBackgroundColor: "#00adf5",
  selectedDayTextColor: "#ffffff",
  todayTextColor: "#00adf5",
  dayTextColor: "white",
  textDisabledColor: "gray",
  dotColor: "#00adf5",
  selectedDotColor: "#ffffff",
  arrowColor: "orange",
  monthTextColor: "#78ACFF",
  textMonthFontWeight: "normal",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
};

export default class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      items: null
    };
  }
  static navigationOptions = {
    header: null,
    tabBarIcon: <Ionicons name="md-calendar" size={25} color="white" />,
    tabBarColor: "#cc4360",
    shifting: true
  };

  static renderItem(item) {
    console.log(item);
    return (
      <View style={[styles.item, {height: 110}]}>
        <Ionicons
          style={styles.card}
          size={30}
          color={"#68aad1"}
          name="md-document"
        />
        <Text style={styles.itemtitle}>{item.title}</Text>
        <Text style={styles.itemtext}>{moment(item.date).format("MMMM Do YYYY")}</Text>
        <Text style={styles.itemtext}>{item.time}</Text>
        <Text style={styles.locationtitle}>@ {item.location}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pagetitle}>My Calendar</Text>

        <Agenda
          // the list of items that have to be displayed in agenda. If you want to render item as empty date
          // the value of date key kas to be an empty array []. If there exists no value for date key it is
          // considered that the date in question is not yet loaded
          items={this.state.items}
          // callback that gets called when items for a certain month should be loaded (month became visible)
          loadItemsForMonth={month => {
            console.log("trigger items loading");
          }}
          // callback that fires when the calendar is opened or closed
          onCalendarToggled={calendarOpened => {
            console.log(calendarOpened);
          }}
          // callback that gets called on day press
          onDayPress={day => {
            console.log("day pressed");
          }}
          // callback that gets called when day changes while scrolling agenda list
          onDayChange={day => {
            console.log("day changed");
          }}
          // initially selected day
          selected={moment().format("YYYY-MM-DD")}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined

          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined

          // Max amount of months allowed to scroll to the past. Default = 50
          pastScrollRange={50}
          // Max amount of months allowed to scroll to the future. Default = 50
          futureScrollRange={50}
          // specify how each item should be rendered in agenda
          renderItem={MyCalendar.renderItem.bind(this)}
          // specify how each date should be rendered. day can be undefined if the item is not first in that day.

          // specify how empty date content with no items should be rendered
          renderEmptyDate={() => {
            return <View />;
          }}
          // specify how agenda knob should look like

          // specify what should be rendered instead of ActivityIndicator

          // specify your item comparison function for increased performance
          rowHasChanged={(r1, r2) => {
            return r1.text !== r2.text;
          }}
          // Hide knob button. Default = false
          hideKnob={false}
          // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
          onRefresh={() => console.log("refreshing...")}
          // Set this true while waiting for new data from a refresh
          refreshing={false}
          // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
          refreshControl={null}
          // agenda theme
          theme={{
            ...calendarTheme,
            agendaDayTextColor: "white",
            agendaDayNumColor: "white",
            agendaTodayColor: "white",
            agendaKnobColor: "white"
          }}
          // agenda container style
          style={{}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    left: "1%"
  },

  pagetitle: {
    marginTop: 40,
    fontSize: 40,
    width: "100%",
    textAlign: "center",
    left: 0,
    top: 0,
    zIndex: 100000,
    color: "#78ACFF",
    fontWeight: "300",
    marginBottom: 20
  },

  itemtext: {
    color: "#ededed",
    marginLeft: 35,
    top: -30
  },

  itemtitle: {
    color: "white",
    fontSize: 20,
    marginLeft: 35,
    top: -30
  },

  locationtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 5,
    marginLeft: 35,
    top: -30
  },

  item: {
    backgroundColor: "#636363",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },

  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E3133"
  }
});
