import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import path from "@assets/images/path/path.png";
import FormHeading from "@components/FormHeading";
import MaterialButton from "@components/MaterialButton";
import global from "@config/global_styles";
import cross from "@assets/icons/cross.png";

class ConfirmPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      passwordValidate: true,
      isFocusedPassword: false,
      showPassword: true
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.onFocusPasswordChange = this.onFocusPasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.clear = this.clear.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
  }

  onFocusPasswordChange() {
    this.setState({ isFocusedPassword: true });
  }

  _onChangeText(text) {
    this.setState({
      password: text
    });
  }

  toggle() {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword
    });
  }

  handleBackPress() {
    console.log("goBack");
    const { navigation } = this.props;
    navigation.goBack(null);
    return true;
  }

  handleValidation() {
    Keyboard.dismiss();
    const {
      navigation: { navigate }
    } = this.props;
    navigate("EditPassword");
  }

  clear() {
    this.textInput.clear();
  }

  render() {
    const {
      isFocusedPassword,
      passwordValidate,
      showPassword,
      password
    } = this.state;
    return (
      <SafeAreaView style={styles.findIdContainer}>
        <TopPrevHeader prevIcon={path} onPress={this.handleBackPress} />
        <FormHeading formHeading="비밀번호 수정" />
        <View style={styles.formContainer}>
          <View style={styles.resetPwdWrapper}>
            <TextInput
              style={[
                styles.textInput,
                isFocusedPassword ? styles.active : null,
                !passwordValidate ? styles.error : null
              ]}
              ref={input => {
                this.textInput = input;
              }}
              onChangeText={this._onChangeText}
              placeholder="이전 비밀번호"
              maxLength={10}
              onFocus={this.onFocusPasswordChange}
              secureTextEntry={showPassword}
              value={password}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity style={styles.cross} onPress={this.clear}>
              <Image source={cross} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggle}>
              <Text style={styles.showPassword}>비밀번호 보기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.confirmBtn}>
            <MaterialButton
              // Confirm Password
              text="확인"
              backgroundColor="purple"
              color="white"
              onPress={this.handleValidation}
              fontSize={16}
            />
          </View>
        </View>
        {/* {visibleAlert && (
          <TopAlert alertMessage={emailMessage} backgroundColor="danger" />
        )}
        {visiblePwdAlert && (
          <TopAlert alertMessage={pwdMessage} backgroundColor="danger" />
        )} */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  findIdContainer: {
    backgroundColor: global.white,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  resetPwdWrapper: {
    paddingTop: 20,
    width: "100%",
    position: "relative"
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "rgb(235,235,235)",
    marginVertical: 10
  },
  active: {
    borderColor: "rgb(100,59,167)"
  },
  error: {
    borderColor: "red"
  },
  formContainer: {
    paddingHorizontal: 48,
    paddingVertical: 40
  },
  cross: {
    position: "absolute",
    right: 0,
    top: 20
  },
  confirmBtn: {
    marginVertical: 30,
    width: "100%"
  },
  showPassword: {
    textAlign: "right",
    fontSize: 12,
    color: global.purple
  }
});

export default ConfirmPassword;
