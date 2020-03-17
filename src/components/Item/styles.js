import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  itemCardContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  sponsorCoupon: {
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
  itemTextWrapper: {
    display: "flex"
  },
  itemRaffleCard: {
    backgroundColor: "rgb(247,247,247)",
    padding: 15,
    width: "100%"
  },
  scrollContainer: {
    width,
    backgroundColor: "rgb(247,247,247)"
  }
});

export default styles;
