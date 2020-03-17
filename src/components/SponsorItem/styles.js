import { StyleSheet } from "react-native";
import global from "../../../config/global_styles";

export default styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: global.white,
    alignItems: "center",
    borderRadius: 12,

    shadowColor: "rgba(53, 56, 60, 0.07)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 1
  },
  itemContent: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 20
  },
  itemMetaData: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemSponsor: {
    color: global.primary,
    fontSize: 12
  },
  itemDueDate: {
    color: global.danger,
    fontSize: 12
  },
  itemImage: {
    width: 200,
    height: 200
  },
  itemTitle: {
    color: global.black,
    fontSize: 18,
    marginTop: 10
  },
  itemPrice: {
    color: global.lightgray,
    marginTop: 10
  }
});
