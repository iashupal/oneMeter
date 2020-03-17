import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, Image, TouchableOpacity, Alert } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import FormHeading from '@components/FormHeading';
import MaterialButton from '@components/MaterialButton';
import global from '@config/global_styles';
import cross from '@assets/icons/cross.png';
import TopAlert from '@components/TopAlert';

class LoginEmailResetPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibleAlert: false,
			email: '',
			emailValidate: true,
			isFocusedEmail: false
		};
		this.handleValidation = this.handleValidation.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.clear = this.clear.bind(this);
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
		const { email } = this.state;
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
	clear() {
		console.log('clear');
		this.textInput.clear();
	}
	render() {
		return (
			<View style={styles.findIdContainer}>
				<TopPrevHeader prevIcon={path} />
				<FormHeading formHeading="비밀번호 찾기" />
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
							onChangeText={text => this.validate(text, 'email')}
							placeholder="이메일주소"
							onFocus={this.onFocusChange}
							value={this.state.text}
							underlineColorAndroid="transparent"
						/>

						<TouchableOpacity style={styles.cross} onPress={this.clear}>
							<Image source={cross} />
						</TouchableOpacity>
					</View>
					<Text style={styles.pwdInfo}>비밀번호를 재설정하려는 계정(이메일)을 입력해주세요.</Text>
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
				{this.state.visibleAlert && <TopAlert alertMessage="이메일 형식의 계정을 입력해주세요." backgroundColor="danger" />}
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
	resetPwdWrapper: {
		width: '100%',
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
		marginVertical: 30,
		width: '100%'
	},
	forgotPwdLink: {
		textAlign: 'right',
		fontSize: 12,
		color: global.purple
	},
	cross: {
		position: 'absolute',
		right: 0,
		top: 25
	},
	pwdInfo: {
		fontSize: 13,
		lineHeight: 21,
		marginVertical: 10
	}
});
export default LoginEmailResetPassword;
