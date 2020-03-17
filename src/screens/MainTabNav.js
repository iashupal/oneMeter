import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import TabNav from "@components/TabNav";
import SponsorScreen from "@screens/SponsorScreen";
import Item from "@components/Item";
import HotDealCard from "@components/HotDealCard";
import ExhibitionScreen from "@components/Exhibition";

import btnGameRuler from "@assets/icons/btnGameRuler/btnGameRuler.png";
import btnGameRulet from "@assets/icons/btnGameRulet/btnGameRulet.png";
import btnGameWater from "@assets/icons/btnGameWater/btnGameWater.png";
import startGame from "@assets/images/imgStartGame/startGame.png";

import ActionButton from "react-native-circular-action-menu";

class MainTabNav extends Component {
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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.mainTabContainer}>
          <TabNav
            selected={tab === 0}
            text="스폰서"
            onPress={() => this.changeTab(0)}
          />
          <TabNav
            selected={tab === 1}
            text="핫딜"
            onPress={() => this.changeTab(1)}
          />
          <TabNav
            selected={tab === 2}
            text="기획전"
            onPress={() => this.changeTab(2)}
          />
          <TabNav
            selected={tab === 3}
            text="아이템"
            onPress={() => this.changeTab(3)}
          />
        </View>
        {tab === 0 && <SponsorScreen />}
        {tab === 1 && <HotDealCard />}
        {tab === 2 && <ExhibitionScreen />}
        {tab === 3 && <Item />}
        {tab !== 3 && (
          <TouchableOpacity
            style={{
              position: "absolute",
              bottom: "10%",
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Image source={startGame} />
            <ActionButton
              buttonTextColor="rgba(0,120,0,0)"
              radius={80}
              btnOutRange="rgba(0,0,0,0)"
              buttonColor="rgba(0,0,0,0)"
              style={styles.gameContainer}
            >
              <ActionButton.Item
                title="New Task"
                onPress={() => console.log("notes tapped!")}
              >
                <Image
                  source={btnGameRuler}
                  resizeMode="contain"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item title="Notifications" onPress={() => {}}>
                <Image
                  source={btnGameRulet}
                  resizeMode="contain"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
              <ActionButton.Item title="All Tasks" onPress={() => {}}>
                <Image
                  source={btnGameWater}
                  resizeMode="contain"
                  style={styles.actionButtonIcon}
                />
              </ActionButton.Item>
            </ActionButton>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainTabContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    borderBottomWidth: 0.8,
    borderColor: "rgb(238,238,238)",
    paddingTop: 10,
    paddingBottom: 10
  }
});
export default MainTabNav;
