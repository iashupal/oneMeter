import { StyleSheet } from "react-native";
import global from "@config/global_styles";

export default styles = StyleSheet.create({
  prevImageContain: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    alignItems: "flex-start",
    padding: 10,
    paddingRight: 20,
    backgroundColor: global.white
  },
  prevIcon: {
    tintColor: "rgb(100,59,167)"
  },
  screenName: {
    fontSize: 18,
    color: "rgb(53,56,60)",
    fontWeight: "bold"
  },
  nextText: {
    color: "rgb(119,20,161)",
    fontSize: 16
  },
  icon: {
    marginHorizontal: 10,
    width: 18,
    height: 18
  }
});
