import { StyleSheet } from "react-native";
import global from "../../../config/global_styles";

export default styles = StyleSheet.create({
  hintContainer: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: global.lightgray,
    borderTopColor: global.lightgray,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    alignSelf: "center"
  },
  couponText: {
    width: "90%",
    color: global.lightgray
  },
  image: {
    margin: 10,
    bottom: "4%" ,
    height: "100%"
  }
});
