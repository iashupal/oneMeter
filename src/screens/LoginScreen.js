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

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValidate: true,
      isFocusedEmail: false,
      password: "",
      passwordValidate: true,
      isFocusedPassword: false,
      visibleAlert: false,
      showPassword: true,
      visiblePwdAlert: false
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onFocusPasswordChange = this.onFocusPasswordChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.clear = this.clear.bind(this);
  }

  validate(text, type) {
    pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    pwdMessage = "비밀번호는 영문,숫자,특수문자, 8자 이상으로 해주세요.";
    emailMessage = "이메일 형식의 계정을 입력해주세요.";
    if (type == "email") {
      if (regex.test(text)) {
        this.setState({
          emailValidate: true,
          visibleAlert: false
        });
      } else {
        this.setState({
          emailValidate: false,
          visibleAlert: true
        });
      }
    } else if (type == "password") {
      if (pwd.test(text)) {
        this.setState({
          passwordValidate: true,
          visiblePwdAlert: false
        });
      } else {
        this.setState({
          passwordValidate: false,
          visiblePwdAlert: true
        });
      }
    }
  }

  toggle() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  onFocusChange() {
    this.setState({ isFocusedEmail: true });
  }

  onFocusPasswordChange() {
    this.setState({ isFocusedPassword: true });
  }

  onFocus() {
    this.setState({
      borderBottomColor: global_styles.primary,
      borderBottomWidth: 1
    });
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  handleValidation() {
    const { email } = this.state;
    Keyboard.dismiss();
  }

  clear() {
    console.log("clear");
    this.textInput.clear();
  }

  render() {
    return (
      <SafeAreaView style={styles.findIdContainer}>
        <TopPrevHeader prevIcon={path} />
        <FormHeading formHeading="이메일 로그인" />
        <View style={styles.formContainer}>
          <View style={styles.resetPwdWrapper}>
            <TextInput
              style={[
                styles.textInput,
                this.state.isFocusedEmail ? styles.active : null,
                !this.state.emailValidate ? styles.error : null
              ]}
              ref={input => {
                this.textInput = input;
              }}
              onChangeText={text => this.validate(text, "email")}
              placeholder="이메일주소"
              onFocus={this.onFocusChange}
              value={this.state.text}
              underlineColorAndroid="transparent"
            />

            <TouchableOpacity style={styles.cross} onPress={this.clear}>
              <Image source={cross} />
            </TouchableOpacity>
          </View>
          <View style={styles.resetPwdWrapper}>
            <TextInput
              style={[
                styles.textInput,
                this.state.isFocusedPassword ? styles.active : null,
                !this.state.passwordValidate ? styles.error : null
              ]}
              onChangeText={text => this.validate(text, "password")}
              ref={input => {
                this.textInput = input;
              }}
              placeholder="비밀번호(영문,숫자,특수문자,8자 이상)"
              maxLength={10}
              secureTextEntry={this.state.showPassword}
              onFocus={this.onFocusPasswordChange}
              value={this.state.pwd}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.cross} onPress={this.clear}>
              <Image source={cross} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.toggle}>
              <Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.confirmBtn}>
            <MaterialButton
              text="다음"
              backgroundColor="purple"
              color="white"
              onPress={this.handleValidation}
              fontSize={16}
            />
          </View>
          <View style={styles.renderScreen}>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.screenName}>아이디 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.screenName}>비밀번호 찾기</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPress}>
              <Text style={styles.screenName}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.visibleAlert && (
          <TopAlert alertMessage={emailMessage} backgroundColor="danger" />
        )}
        {this.state.visiblePwdAlert && (
          <TopAlert alertMessage={pwdMessage} backgroundColor="danger" />
        )}
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
    top: 25
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

export default LoginScreen;
