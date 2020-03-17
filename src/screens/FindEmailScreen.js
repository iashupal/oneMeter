import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, Alert, TouchableOpacity } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import FormHeading from '@components/FormHeading';
import MaterialButton from '@components/MaterialButton';
import global from '@config/global_styles';
import TopAlert from '@components/TopAlert';

class FindEmailScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			emailValidate: true,
			isFocusedEmail: false,
			visibleAlert: false,
			showPassword: true
		};
		this.handleValidation = this.handleValidation.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}
	validate(text, type) {
		regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (type == 'email') {
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
		}
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
	handleValidation() {
		Alert.alert(
			'Alert Title',
			'My Alert Msg',
			[
				{ text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			],
			{ cancelable: false }
		);
		Keyboard.dismiss();
	}
	render() {
		return (
			<View style={styles.findIdContainer}>
				<TopPrevHeader prevIcon={path} />
				<FormHeading formHeading="비밀번호 찾기" />
				<View style={styles.formContainer}>
					<TextInput
						style={[
							styles.textInput,
							this.state.isFocusedEmail ? styles.active : null,
							!this.state.emailValidate ? styles.error : null
						]}
						onChangeText={text => this.validate(text, 'email')}
						placeholder="이름"
						onFocus={this.onFocusChange}
						value={this.state.text}
						underlineColorAndroid="transparent"
					/>
					<Text style={styles.forgotPwdLink}>비밀번호를 재설정하려는 계정(이메일)을 입력해주세요.</Text>
					<View style={styles.confirmBtn}>
						<MaterialButton
							text="이메일 전송"
							backgroundColor="purple"
							color="white"
							onPress={this.handleValidation}
							fontSize={16}
						/>
					</View>

					<TouchableOpacity>
						<Text style={styles.forgotPwdLink}>아이디 찾기</Text>
					</TouchableOpacity>
				</View>
				{this.state.visibleAlert && (
					<TopAlert alertMessage="1Meter 회원으로 가입되어 있지 않습니다. 회원가입 해주시길 바랍니다." backgroundColor="danger" />
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	findIdContainer: {
		backgroundColor: global.white,
		height: '100%',
		flex: 1,
		position: 'relative'
	},
	textInput: {
		borderBottomWidth: 1,
		borderColor: 'rgb(235,235,235)',
		marginVertical: 10
	},
	error: {
		borderColor: 'red'
	},
	active: {
		borderColor: 'rgb(100,59,167)'
	},
	formContainer: {
		paddingHorizontal: 48,
		paddingVertical: 40
	},
	confirmBtn: {
		width: '100%'
	},
	forgotPwdLink: {
		textAlign: 'center',
		fontSize: 14
	}
});
export default FindEmailScreen;
