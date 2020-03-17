import { StyleSheet } from "react-native";
import global from "@config/global_styles";

export default styles = StyleSheet.create({
  headingContainer: {
    paddingHorizontal: 0,
    paddingTop: 44,
    backgroundColor: global.white
  },
  formHeading: {
    fontSize: 28,
    color: global.black
  },
  headingPadding: {
    paddingHorizontal: 48
  }
});
