import React, { Fragment, Component } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Switch,
  SafeAreaView
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import FormHeading from "@components/FormHeading";
import path from "@assets/images/path/path.png";
import global from "@config/global_styles";
import MaterialButton from "@components/MaterialButton";

class NoticeScreen extends Component {
  constructor(props) {
    super();
    this.state = {
      activeSwitch: null
    };
  }

  toggleSwitch = switchNumber => {
    this.setState({
      activeSwitch:
        switchNumber === this.state.activeSwitch ? null : switchNumber
    });
  };

  switchOne = value => {
    this.toggleSwitch(1);
  };

  switchTwo = value => {
    this.toggleSwitch(2);
  };

  switchThree = value => {
    this.toggleSwitch(3);
  };

  render() {
    return (
      <>
        <SafeAreaView style={styles.noticeContainer}>
          <TopPrevHeader
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
            prevIcon={path}
            screenName="알림 설정" />
          <ScrollView showsVerticalScrollIndicator>
            <View style={styles.noticHeadingWrapper}>
              <FormHeading formHeading="마케팅 수신" compact />
            </View>
            <View style={styles.notices}>
              <Text style={styles.noticeInfo}>
                1meter는 고객님과의 1m 가까이에서 고객님의 소리를 듣겠습니다.
                최대한 빠르고 친절히 답변 드리겠습니다.
              </Text>
              <Text style={styles.noticeInfo}>
                단, 기기의 알림 설정 상태 및 디바이스 상태에 따라 알림이
                수신되지 않을 수 있습니다.
              </Text>
            </View>
            <View style={styles.noticeToggleWrapper}>
              <Text style={styles.toggleText}>이메일</Text>
              <Switch
                trackColor={{ true: "#643ba7", false: "rgb(216,216,216)" }}
                style={{ marginBottom: 10 }}
                thumbColor="white"
                onValueChange={this.switchOne}
                value={this.state.activeSwitch === 1}
              />
            </View>
            <View style={styles.noticeToggleWrapper}>
              <Text style={styles.toggleText}>SMS</Text>
              <Switch
                trackColor={{ true: "#643ba7", false: "rgb(216,216,216)" }}
                style={{ marginBottom: 10 }}
                thumbColor="white"
                onValueChange={this.switchTwo}
                value={this.state.activeSwitch === 2}
              />
            </View>
            <View style={styles.noticeToggleWrapper}>
              <Text style={styles.toggleText}>푸쉬알림</Text>
              <Switch
                trackColor={{ true: "#643ba7", false: "rgb(216,216,216)" }}
                style={{ marginBottom: 10 }}
                thumbColor="white"
                onValueChange={this.switchThree}
                value={this.state.activeSwitch === 3}
              />
            </View>
            <View style={styles.confirmBtn}>
              <MaterialButton
                text="변경"
                backgroundColor="purple"
                color="white"
                onPress={this.handleValidation}
                fontSize={16}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  noticeContainer: {
    backgroundColor: global.white,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  noticHeadingWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    flex: 1
  },
  notices: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  noticeToggleWrapper: {
    borderBottomColor: "rgb(238,238,238)",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  confirmBtn: {
    marginVertical: 100,
    paddingHorizontal: 20,
    width: "100%"
  },
  toggleText: {
    fontSize: 16,
    color: "rgb(51,51,51)",
    lineHeight: 24
  },
  noticeInfo: {
    fontSize: 14,
    lineHeight: 25,
    color: "rgb(53,56,60)",
    marginVertical: 5
  }
});
export default NoticeScreen;
