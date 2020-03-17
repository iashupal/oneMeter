import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
  menuContainer: {
    width,
    height: 50,
    backgroundColor: global.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%"
  },
  icon: {
    width: 40,
    height: 18,
    resizeMode: "contain"
  },
  leftContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  middleContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  rightContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
