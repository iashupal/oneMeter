import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import global from "@config/global_styles";
import ic_coin from "@assets/icons/ic_coin/ic_coin.png";
import path from "@assets/images/path/path.png";
import DetailInfoHeading from "@components/DetailInfoHeading";

class MetricCoinScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          detailHeading: "구매내역"
        },
        {
          detailHeading: "사용내역"
        }
      ]
    };
    this.toogleDrawer = this.toogleDrawer.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  toogleDrawer() {
    const { navigation } = this.props;
    navigation.navigate("Home");
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
          screenName="미터머니"
          onPress={this.toogleDrawer}
        />
        <ScrollView showsVerticalScrollIndicator>
          <View style={styles.moneyWrapper}>
            <View style={styles.noticeToggleWrapper}>
              <View style={styles.totalMoney}>
                <Text style={styles.toggleText}>보유 미터 머니</Text>
                <Image source={ic_coin} />
              </View>
              <Text style={styles.toggleText}>140</Text>
            </View>
            <DetailInfoHeading
              ref={ref => (this.detailInfo = ref)}
              onPress={this.handlePress}
              detailInfo={data}
            />
          </View>
        </ScrollView>
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
  noticeToggleWrapper: {
    borderBottomColor: "rgb(238,238,238)",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  toggleText: {
    fontSize: 16,
    color: "rgb(51,51,51)",
    lineHeight: 24
  },
  totalMoney: {
    flexDirection: "row",
    display: "flex"
  }
});
export default MetricCoinScreen;
