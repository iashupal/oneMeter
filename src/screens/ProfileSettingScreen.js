import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import ProfileUpload from "@components/ProfileUpload";
import TopPrevHeader from "@components/TopPrevHeader";
import path from "@assets/images/path/path.png";
import user from "@assets/icons/user/user.png";
import MaterialButton from "@components/MaterialButton";
import { NavigationActions } from "react-navigation";

const navigateAction = NavigationActions.navigate({
  routeName: "Home",
  params: {}
});

function ProfileSettingScreen(props) {
  return (
    <SafeAreaView style={styles.settingContainer}>
      <TopPrevHeader
        prevIcon={path}
        screenName="고객 센터"
        onPress={() => {
          // props.navigation.navigate("MainTabNav");
          props.navigation.dispatch(navigateAction);
        }}
      />
      <View style={styles.settingProfileForm}>
        <View style={styles.userProfile}>
          <ProfileUpload width={60} height={60} profilePic={user} />
          <Text style={styles.userName}>홍길동</Text>
        </View>
        <View marginVertical={40}>
          <View style={styles.settingProfileRow}>
            <Text style={styles.settingProfileInfoText}>이메일</Text>
            <Text style={styles.settingProfileInfo}>1meter@gmail.com</Text>
          </View>
          <View style={styles.settingProfileRow}>
            <Text style={styles.settingProfileInfoText}>비밀번호</Text>
            <Text style={styles.settingProfileInfo}>********</Text>
          </View>
          <View style={styles.settingProfileRow}>
            <Text style={styles.settingProfileInfoText}>연락처</Text>
            <Text style={styles.settingProfileInfo}>010-8978-3390</Text>
          </View>
        </View>
        <View style={styles.confirmBtn}>
          <MaterialButton
            text="비밀번호 수정"
            backgroundColor="purple"
            color="white"
            onPress={() => {
              props.navigation.navigate("ConfirmPassword");
            }}
            fontSize={16}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  settingContainer: {
    backgroundColor: global.white,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  confirmBtn: {
    marginVertical: 0,
    width: "100%"
  },
  settingProfileForm: {
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  userProfile: {
    flexDirection: "row",
    display: "flex"
  },
  userName: {
    fontSize: 20,
    lineHeight: 20,
    color: "rgb(51,51,51)",
    letterSpacing: 0.63,
    fontWeight: "bold",
    paddingLeft: 20
  },
  settingProfileInfoText: {
    fontSize: 16,
    lineHeight: 20,
    color: "rgb(155,155,155)",
    letterSpacing: 0.46,
    width: 70
  },
  settingProfileRow: {
    flexDirection: "row",
    display: "flex",
    marginVertical: 15
  },
  settingProfileInfo: {
    fontSize: 16,
    lineHeight: 20,
    paddingLeft: 20,
    color: "rgb(51,51,51)",
    letterSpacing: 0.46,
    textAlign: "left"
  }
});
export default ProfileSettingScreen;
