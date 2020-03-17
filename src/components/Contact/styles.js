import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    width: "100%",
    position: "relative",
    height: 450
  },
  contactText: {
    paddingHorizontal: 15,
    fontSize: 14,
    lineHeight: 20,
    color: "rgb(53,56,60)"
  },
  formContainer: {
    marginTop: 20
  },
  contactForm: {
    borderTopWidth: 1,
    paddingTop: 20,
    borderTopColor: "rgb(238,238,238)",
    paddingHorizontal: 20,
    height: 60
  },
  confirmBtn: {
    paddingHorizontal: 15,
    alignSelf: "flex-end",
    position: "absolute",
    width: "100%",
    bottom: 0,
    marginBottom: 40,
    flex: 1
  }
});
