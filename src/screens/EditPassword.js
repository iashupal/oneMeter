import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import path from "@assets/images/path/path.png";
import FormHeading from "@components/FormHeading";
import MaterialButton from "@components/MaterialButton";
import global from "@config/global_styles";
import TopAlert from "@components/TopAlert";
import cross from "@assets/icons/cross.png";

const pwdMessage = "비밀번호는 영문,숫자,특수문자, 8자 이상으로 해주세요.";
const emailMessage = "이메일 형식의 계정을 입력해주세요.";

class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValidate: true,
      isFocusedEmail: false,
      password: "",
      confPasswod: "",
      passwordValidate: true,
      isFocusedPassword: false,
      passwordValidate2: true,
      isFocusedPassword2: false,
      visibleAlert: false,
      showPassword: true,
      showPassword2: true,
      visiblePwdAlert: false
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.onFocusPasswordChange = this.onFocusPasswordChange.bind(this);
    this.onFocusPasswordChange2 = this.onFocusPasswordChange2.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.toggle = this.toggle.bind(this);
    this.clear = this.clear.bind(this);
    this.clear2 = this.clear2.bind(this);
  }

  onFocusPasswordChange() {
    this.setState({ isFocusedPassword: true });
  }

  onFocusPasswordChange2() {
    this.setState({ isFocusedPassword2: true });
  }

  toggle(input) {
    const { showPassword, showPassword2 } = this.state;

    switch (input) {
      case 1:
        this.setState({
          showPassword: !showPassword
        });
        break;
      case 2:
        this.setState({
          showPassword2: !showPassword2
        });
        break;

      default:
        this.setState({
          showPassword: true,
          showPassword2: true
        });
        break;
    }
  }

  validate(text, type) {
    const pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    const { password } = this.state;
    if (type === "password") {
      if (pwd.test(text)) {
        this.setState({
          password: text,
          passwordValidate: true
          // visiblePwdAlert: false
        });
      } else {
        this.setState({
          password: text,
          passwordValidate: false
          // visiblePwdAlert: true
        });
      }
    } else if (type === "conf_password") {
      if (text === password) {
        this.setState({
          confPasswod: text,
          passwordValidate2: true
          // visiblePwdAlert2: false
        });
      } else {
        this.setState({
          confPasswod: text,
          passwordValidate2: false
          // visiblePwdAlert2: true
        });
      }
    }
  }

  handleBackPress() {
    console.log("goBack");
    const { navigation } = this.props;
    navigation.goBack(null);
    return true;
  }

  handleValidation() {
    const { navigation } = this.props;
    navigation.pop(2);
    Keyboard.dismiss();
  }

  clear() {
    this.textInput.clear();
  }

  clear2() {
    this.textInput2.clear();
  }

  render() {
    const {
      isFocusedPassword,
      passwordValidate,
      passwordValidate2,
      isFocusedPassword2,
      showPassword,
      showPassword2,
      password,
      confPasswod
    } = this.state;
    return (
      <SafeAreaView style={styles.findIdContainer}>
        <TopPrevHeader prevIcon={path} onPress={this.handleBackPress} />
        <FormHeading formHeading="비밀번호 재설정" />
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
              onChangeText={text => this.validate(text, "password")}
              placeholder="새 비밀번호"
              maxLength={10}
              onFocus={this.onFocusPasswordChange}
              secureTextEntry={showPassword}
              value={password}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity style={styles.cross} onPress={this.clear}>
              <Image source={cross} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggle(1)}>
              <Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.resetPwdWrapper}>
            <TextInput
              style={[
                styles.textInput,
                isFocusedPassword2 ? styles.active : null,
                !passwordValidate2 ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "conf_password")}
              ref={input => {
                this.textInput2 = input;
              }}
              placeholder="새 비밀번호 확인"
              maxLength={10}
              secureTextEntry={showPassword2}
              onFocus={this.onFocusPasswordChange2}
              value={confPasswod}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.cross} onPress={this.clear2}>
              <Image source={cross} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggle(2)}>
              <Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.confirmBtn}>
            <MaterialButton
              text="비밀번호 변경"
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
  forgotPwdLink: {
    textAlign: "right",
    fontSize: 12,
    color: global.purple
  },
  renderScreen: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  screenName: {
    fontSize: 14,
    lineHeight: 21,
    marginVertical: 10,
    color: "rgb(130,135,143)"
  }
});

export default EditPassword;
