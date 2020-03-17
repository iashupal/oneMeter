import React, { Fragment, Component } from "react";
import {
  View,
  ScrollView,
  BackHandler,
  StyleSheet,
  SafeAreaView
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import ServiceTab from "@components/ServiceTab";
import path from "@assets/images/path/path.png";
import ConditionalStatus from "@components/ConditionalStatus";
import TodaysStatus from "@components/TodaysStatus";
import { NavigationActions } from "react-navigation";

class ApplicationStatusScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
    this.changeTab = this.changeTab.bind(this);
    this.toogleDrawer = this.toogleDrawer.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  changeTab(tab) {
    this.setState({ tab });
  }

  toogleDrawer() {
    const { navigation } = this.props;
    // navigation.openDrawer();
    const navigateAction = NavigationActions.navigate({
      routeName: "Home",
      params: {}
    });
    navigation.dispatch(navigateAction);
  }

  handleBackPress() {
    const { navigation } = this.props;
    navigation.goBack(null); // works best when the goBack is async
    return true;
  }

  render() {
    const { tab } = this.state;
    return (
      <>
        <SafeAreaView style={styles.moneyContainer}>
          <TopPrevHeader
            prevIcon={path}
            screenName="응모현황"
            onPress={this.toogleDrawer}
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
                width={70}
                selected={tab === 0}
                text="오늘"
                onPress={() => this.changeTab(0)}
              />
              {/* SCREENS MISSING IN ZEPLIN */}
              {/* <ServiceTab
                width={70}
                selected={tab === 1}
                text="3일"
                onPress={() => this.changeTab(1)}
              />
              <ServiceTab
                width={70}
                selected={tab === 2}
                text="일주일"
                onPress={() => this.changeTab(2)}
              />
              <ServiceTab
                width={70}
                selected={tab === 3}
                text="한달"
                onPress={() => this.changeTab(3)}
              /> */}
              <ServiceTab
                width={70}
                selected={tab === 4}
                text="조건검색"
                onPress={() => this.changeTab(4)}
              />
            </View>
            {tab === 0 && <TodaysStatus />}
            {/* {tab === 1 && <TodaysStatus />}
            {tab === 2 && <TodaysStatus />}
            {tab === 3 && <TodaysStatus />} */}
            {tab === 4 && <ConditionalStatus />}
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
  }
});
export default ApplicationStatusScreen;
