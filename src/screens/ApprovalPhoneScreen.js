import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ScrollView
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import FormHeading from "@components/FormHeading";
import path from "@assets/images/path/path.png";
import global from "@config/global_styles";
import cross from "@assets/icons/cross.png";
import TopAlert from "@components/TopAlert";
import OTP from "@components/OTP";
import MaterialButton from "@components/MaterialButton";

class ApprovalPhoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameValidate: true,
      number: "",
      numValidate: true,
      isFocusedName: false,
      isFocusedNumber: false,
      visibleAlert: false,
      user: "",
      otpShow: true
    };
    updateUser = user => {
      this.setState({ user });
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onFocusNumberChange = this.onFocusNumberChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  validate(text, type) {
    alpha = /^[a-zA-Z]+$/;
    num = /^[0-9]+$/;
    message = "인증에 실패하였습니다. 다시 인증을 진행해주세요.";
    if (type == "name") {
      if (alpha.test(text)) {
        this.setState({
          nameValidate: true,
          visibleAlert: false
        });
      } else {
        this.setState({
          nameValidate: false,
          visibleAlert: true
        });
      }
    } else if (type == "number") {
      if (num.test(text)) {
        this.setState({
          numValidate: true
        });
      } else {
        this.setState({
          numValidate: false
        });
      }
    }
  }

  onFocusChange() {
    this.setState({ isFocusedName: true });
  }

  onFocusNumberChange() {
    this.setState({ isFocusedNumber: true });
  }

  onFocus() {
    this.setState({
      borderBottomColor: global_styles.primary,
      borderBottomWidth: 1
    });
  }

  clear() {
    console.log("clear");
    this.textInput.clear();
  }

  handleValidation() {
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.ApprovalContainer}>
        <TopPrevHeader prevIcon={path} />
        <ScrollView showsVerticalScrollIndicator>
          <FormHeading formHeading="휴대폰 본인인증" />
          <View style={styles.formContainer}>
            <View style={styles.resetPwdWrapper}>
              <TextInput
                style={[
                  styles.textInput,
                  this.state.isFocusedName ? styles.active : null,
                  !this.state.nameValidate ? styles.error : null
                ]}
                ref={input => {
                  this.textInput = input;
                }}
                onChangeText={text => this.validate(text, "name")}
                placeholder="홍길동"
                onFocus={this.onFocusChange}
                underlineColorAndroid="transparent"
              />

              <TouchableOpacity style={styles.cross} onPress={this.clear}>
                <Image source={cross} />
              </TouchableOpacity>
            </View>
            <View style={styles.dropdownWrapper}>
              <View style={styles.numInputWrapper}>
                <TextInput
                  style={[
                    styles.numInput,
                    styles.textInput,
                    this.state.isFocusedNumber ? styles.active : null,
                    !this.state.numValidate ? styles.error : null
                  ]}
                  onChangeText={text => this.validate(text, "number")}
                  placeholder="휴대폰 번호"
                  maxLength={10}
                  onFocus={this.onFocusNumberChange}
                  underlineColorAndroid="transparent"
                />
              </View>
              <Text style={styles.drpdwnText}>gthjkl</Text>
            </View>
            {this.state.otpShow && <OTP />}
            <View style={styles.confirmBtn}>
              <MaterialButton
                text="확인"
                backgroundColor="purple"
                color="white"
                onPress={this.handleValidation}
                fontSize={16}
              />
            </View>
          </View>
          {this.state.visibleAlert && (
            <TopAlert alertMessage={message} backgroundColor="danger" />
          )}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ApprovalContainer: {
    backgroundColor: global.white,
    height: "100%",
    flex: 1,
    position: "relative"
  },
  resetPwdWrapper: {
    width: "100%",
    position: "relative"
  },
  dropdownWrapper: {
    borderBottomWidth: 1,
    borderColor: "rgb(235,235,235)",
    marginVertical: 10,
    width: "100%"
  },
  numInputWrapper: {
    width: "100%"
  },
  drpdwnText: {
    position: "absolute",
    right: 0,
    top: 30,
    color: "rgb(53,56,60)",
    fontSize: 16
  },
  numInput: {
    borderBottomWidth: 0
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "rgb(235,235,235)",
    marginVertical: 10,
    position: "relative"
  },
  error: {
    borderColor: "red"
  },
  active: {
    borderColor: "rgb(100,59,167)"
  },
  formContainer: {
    paddingHorizontal: 48,
    paddingVertical: 40
  },
  confirmBtn: {
    marginVertical: 30,
    width: "100%"
  },
  forgotPwdLink: {
    textAlign: "center",
    fontSize: 14
  },
  cross: {
    position: "absolute",
    right: 0,
    top: 25
  },
  dropdownWrapper: {
    flexDirection: "row",
    display: "flex"
  }
});
export default ApprovalPhoneScreen;
