import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Alert,
  TouchableOpacity
} from "react-native";
import TopPrevHeader from "@components/TopPrevHeader";
import path from "@assets/images/path/path.png";
import FormHeading from "@components/FormHeading";
import MaterialButton from "@components/MaterialButton";
import global from "@config/global_styles";
import TopAlert from "@components/TopAlert";

class FindIdScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameValidate: true,
      number: "",
      numValidate: true,
      isFocusedName: false,
      isFocusedNumber: false,
      visibleAlert: false
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onFocusNumberChange = this.onFocusNumberChange.bind(this);
  }

  validate(text, type) {
    alpha = /^[a-zA-Z]+$/;
    num = /^[0-9]+$/;
    message =
      "1Meter 회원으로 가입되어 있지 않습니다. 회원가입 해주시길 바랍니다.";
    if (type == "name") {
      if (alpha.test(text)) {
        this.setState({
          nameValidate: true
        });
      } else {
        this.setState({
          nameValidate: false
        });
      }
    } else if (type == "number") {
      if (num.test(text)) {
        this.setState({
          numValidate: true,
          visibleAlert: false
        });
      } else {
        this.setState({
          numValidate: false,
          visibleAlert: true
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

  handleValidation() {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.findIdContainer}>
        <TopPrevHeader prevIcon={path} />
        <FormHeading formHeading="아이디 찾기" />
        <View style={styles.formContainer}>
          <TextInput
            style={[
              styles.textInput,
              this.state.isFocusedName ? styles.active : null,
              !this.state.nameValidate ? styles.error : null
            ]}
            onChangeText={text => this.validate(text, "name")}
            placeholder="이름"
            onFocus={this.onFocusChange}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={[
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

          <View style={styles.confirmBtn}>
            <MaterialButton
              text="확인"
              backgroundColor="purple"
              color="white"
              onPress={this.handleValidation}
              fontSize={16}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPwdLink}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        {this.state.visibleAlert && (
          <TopAlert
            alertMessage="1Meter 회원으로 가입되어 있지 않습니다. 회원가입 해주시길 바랍니다."
            backgroundColor="danger"
          />
        )}
      </View>
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
  textInput: {
    borderBottomWidth: 1,
    borderColor: "rgb(235,235,235)",
    marginVertical: 10
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
  }
});
export default FindIdScreen;
