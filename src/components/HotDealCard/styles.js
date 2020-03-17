import { StyleSheet } from "react-native";
import global from "@config/global_styles";

export default styles = StyleSheet.create({
  verticalCardContainer: {
    width: "100%"
  },
  sponsorCoupon: {
    borderBottomWidth: 1,
    borderColor: "rgb(238,238,238)",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  couponText: {
    fontSize: 14,
    color: "rgb(130,135,143)",
    paddingLeft: 12
  },
  gameContainer: {
    alignItems: "center",
    padding: 16
  },
  gameText: {
    fontSize: 24,
    letterSpacing: 0.64,
    color: global.black,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5
  },
  sliderContainer: {
    alignItems: "center",
    padding: 16
  },
  wonPrice: {
    fontSize: 18,
    color: "rgb(173,177,184)",
    textAlign: "left"
  },
  sliderInrInfo: {
    alignItems: "flex-start",
    width: "100%",
    textAlign: "left",
    paddingLeft: 16
  },
  image: {
    margin: 10,
    bottom: "4%",
    height: "100%"
  },
  actionButtonIcon: {
    height: 60
  }
});
