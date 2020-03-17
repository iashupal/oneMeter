import React, { Component } from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import MaterialButton from "@components/MaterialButton";
import styles from "./styles";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailValidate: true,
      isFocusedEmail: false
    };
    this.handleValidation = this.handleValidation.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onFocusChange() {
    this.setState({ isFocusedEmail: true });
  }

  onFocus() {
    this.setState({
      borderBottomColor: global_styles.primary,
      borderBottomWidth: 1
    });
  }

  validate(text, type) {
    regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (type == "email") {
      if (regex.test(text)) {
        this.setState({
          emailValidate: true
        });
      } else {
        this.setState({
          emailValidate: false
        });
      }
    }
  }

  handleValidation() {
    Keyboard.dismiss();
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator>
        <View style={styles.contactContainer}>
          <Text style={styles.contactText}>
            스폰서는 늘 당신 주변에 있습니다. 직접 방문하여 쿠폰을 획득하고 응모
            하세요! 상품당 보유 스폰서 쿠폰 12장 이상 참여 가능
          </Text>
          <View style={styles.formContainer}>
            <View style={styles.contactForm}>
              <TextInput
                style={[
                  styles.textInput,
                  this.state.isFocusedEmail ? styles.active : null,
                  !this.state.emailValidate ? styles.error : null
                ]}
                onChangeText={text => this.validate(text, "email")}
                placeholder="답변 받을 이메일을 입력하세요"
                onFocus={this.onFocusChange}
                value={this.state.text}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.contactForm}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => this.validate(text, "msg")}
                placeholder="내용을 입력하세요."
                onFocus={this.onFocusChange}
                value={this.state.msg}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
          <View style={styles.confirmBtn}>
            <MaterialButton
              text="문의하기"
              backgroundColor="purple"
              color="white"
              onPress={this.handleValidation}
              fontSize={16}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default Contact;
