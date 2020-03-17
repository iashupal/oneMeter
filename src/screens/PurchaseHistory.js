/* eslint-disable react/no-multi-comp */
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import global from "@config/global_styles";
import path from "@assets/images/path/path.png";

const PurchaseCell = ({ date, itemName, quantity, bold }) => (
  <View style={[bold ? styles.purchaseCellBold : styles.purchaseCell]}>
    <View style={{ flex: 2 }}>
      <Text
        allowFontScaling
        style={[styles.toggleText, bold && styles.boldText]}
      >
        {date}
      </Text>
    </View>
    <View style={{ flex: 2 }}>
      <Text
        allowFontScaling
        style={[styles.toggleText, bold && styles.boldText]}
      >
        {itemName}{" "}
      </Text>
    </View>
    <View style={{ flex: 1 }}>
      <Text
        allowFontScaling
        style={[styles.toggleText, bold && styles.boldText]}
      >
        {quantity}
      </Text>
    </View>
  </View>
);

class PurchaseHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "19.04.30 21:16",
          itemName: "미터머니 10",
          quantity: "10"
        },
        {
          date: "19.04.30 21:16",
          itemName: "미터머니 50",
          quantity: "50"
        },
        {
          date: "19.04.30 21:16",
          itemName: "미터머니 100",
          quantity: "100"
        }
      ]
    };
    this.handleBackPress = this.handleBackPress.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleBackPress() {
    const { navigation } = this.props;
    navigation.pop();
  }

  handlePress(key) {
    const { data } = this.state;
    console.log("Event", data[key]);
    const { navigation } = this.props;
    navigation.navigate("PurchaseHistory");
  }

  render() {
    const { data } = this.state;
    return (
      <SafeAreaView style={styles.moneyContainer}>
        <TopPrevHeader
          prevIcon={path}
          screenName="구매내역"
          onPress={this.handleBackPress}
        />
        <View style={styles.seperatorLine} />
        <View style={styles.moneyWrapper}>
          <PurchaseCell
            bold
            date="구매날짜"
            itemName="아이템명"
            quantity="수량"
          />
          {Object.keys(data).map(key => (
            <PurchaseCell
              key={key}
              date={data[key].date}
              itemName={data[key].itemName}
              quantity={data[key].quantity}
            />
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  moneyContainer: {
    backgroundColor: global.white,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  moneyWrapper: {
    marginVertical: 10
  },
  purchaseCellBold: {
    borderBottomColor: "rgb(238,238,238)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 0,
    height: 50
  },
  purchaseCell: {
    borderBottomColor: "rgb(238,238,238)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 50
  },
  toggleText: {
    paddingLeft: "12%",
    fontSize: 16,
    fontWeight: "100",
    color: "rgb(51,51,51)",
    lineHeight: 24
  },
  boldText: {
    fontWeight: "bold"
  },
  seperatorLine: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(238,238,238,0.5)"
  }
});
export default PurchaseHistory;
