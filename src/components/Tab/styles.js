import { StyleSheet } from "react-native";
import global from "@config/global_styles";

export default styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "white",
    borderWidth: 1,
    borderTopColor: "transparent",
    borderBottomColor: global.primary,
    borderLeftColor: global.primary,
    borderRightColor: "transparent"
  },
  tabs: {
    width: 210,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  tabText: {
    fontSize: 16,
    color: "rgb(130,135,143)",
    fontWeight: "bold"
  },
  active: {
    borderTopColor: global.primary,
    borderBottomColor: "transparent"
  },
  activeText: {
    color: "black"
  }
});
