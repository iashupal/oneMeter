import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import DatePicker from "react-native-datepicker";
import calendar from "@assets/icons/calendar/calendar.png";

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "15-05-2018" };
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{ height: 40, width: "55%" }}
          date={this.state.date}
          mode="date"
          allowFontScaling
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          // maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: "80%",
              width: 20,
              height: 30,
              resizeMode: "contain"
            },
            dateInput: {
              borderWidth: 0,
              marginRight: "20%"
            }
          }}
          iconSource={calendar}
          onDateChange={date => {
            this.setState({ date });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Picker;
