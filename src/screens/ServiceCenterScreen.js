import React, { Fragment, Component } from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import ServiceTab from "@components/ServiceTab";
import path from "@assets/images/path/path.png";
import global from "@config/global_styles";
import DetailInfoHeading from "@components/DetailInfoHeading";
import Contact from "@components/Contact";

const detailInfoFaq = {
  0: {
    detailHeading: "핫딜"
  },
  1: {
    detailHeading: "기획전"
  },
  2: {
    detailHeading: "스폰서"
  },
  3: {
    detailHeading: "아이템 "
  },
  4: {
    detailHeading: "환불"
  },
  5: {
    detailHeading: "계정"
  },
  6: {
    detailHeading: "회원가입/로그인"
  }
};
class ServiceCenterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({ tab });
  }

  render() {
    const { tab } = this.state;
    return (
      <>
        <SafeAreaView style={styles.moneyContainer}>
          <TopPrevHeader
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
            prevIcon={path}
            screenName="고객 센터"
          />
          <ScrollView showsVerticalScrollIndicator>
            <View
              display="flex"
              flexDirection="row"
              paddingVertical={20}
              alignItems="center"
              justifyContent="center"
            >
              <ServiceTab
                width={185}
                selected={tab === 0}
                text="자주 묻는 질문"
                onPress={() => this.changeTab(0)}
              />
              <ServiceTab
                width={185}
                selected={tab === 1}
                text="문의하기"
                onPress={() => this.changeTab(1)}
              />
            </View>
            {tab === 0 && <DetailInfoHeading detailInfo={detailInfoFaq} />}
            {tab === 1 && <Contact />}
          </ScrollView>
        </SafeAreaView>
      </>
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

export default ServiceCenterScreen;
