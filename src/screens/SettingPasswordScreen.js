import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Keyboard, Image, TouchableOpacity, Alert } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import FormHeading from '@components/FormHeading';
import MaterialButton from '@components/MaterialButton';
import global from '@config/global_styles';
import cross from '@assets/icons/cross.png';
import TopAlert from '@components/TopAlert';

class SettingPasswordScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFocusedCurrentPwd: false,
			visibleAlert: false,
			password: '',
			pwdValidate: true,
			isFocusedNewPwd: false,
			isFocusedConfirmPwd: false,
			showCurrentPassword: true,
			showNewPassword: true,
			showConfirmPassword: true,
			match: null
		};
		this.handleValidation = this.handleValidation.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
		this.onFocusNewPwdChange = this.onFocusNewPwdChange.bind(this);
		this.onFocusConfirmPwdChange = this.onFocusConfirmPwdChange.bind(this);
		this.toggleCurrentPwd = this.toggleCurrentPwd.bind(this);
		this.toggleNewPwd = this.toggleNewPwd.bind(this);
		this.toggleConfirmPwd = this.toggleConfirmPwd.bind(this);
		this.clear = this.clear.bind(this);
		this.handlePasswordMatch = this.handlePasswordMatch.bind(this);
	}
	validate(value) {
		alpha = /^[a-zA-Z]+$/;
		num = /^[0-9]+$/;
		message = '1Meter 회원으로 가입되어 있지 않습니다. 회원가입 해주시길 바랍니다.';
		regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		if (regex.test(value)) {
			this.setState({
				pwdValidate: true
			});
		} else if (!value.password.length > 8) {
			errors.password1 = 'The password provided is not long enough.';
		} else {
			this.setState({
				pwdValidate: false
			});
		}
	}
	onFocusChange() {
		this.setState({ isFocusedPwd: true });
	}
	onFocusNewPwdChange() {
		this.setState({ isFocusedNewPwd: true });
	}
	onFocusConfirmPwdChange() {
		this.setState({ isFocusedConfirmPwd: true });
	}
	onFocus() {
		this.setState({
			borderBottomColor: global_styles.primary,
			borderBottomWidth: 1
		});
	}
	handleValidation() {
		this.validate();
		// const { password } = this.state;
		// this.setState({
		// 	pwdValidate: false,
		// 	visibleAlert: true
		// });
		// alert(password);
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
	handlePasswordMatch() {
		let { password } = this.state;
		if (NewPassword === confirmPassword) {
			state.password.match = true;
		} else {
			state.password.match = false;
		}
	}
	toggleCurrentPwd() {
		this.setState({
			showCurrentPassword: !this.state.showCurrentPassword
		});
	}
	toggleNewPwd() {
		this.setState({
			showNewPassword: !this.state.showNewPassword
		});
	}
	toggleConfirmPwd() {
		this.setState({
			showConfirmPassword: !this.state.showConfirmPassword
		});
	}
	clear() {
		console.log('clear');
		this.setState({
			password: '',
			NewPassword: '',
			confirmPassword: ''
		});
	}
	render() {
		return (
			<View style={styles.findIdContainer}>
				<TopPrevHeader prevIcon={path} />
				<FormHeading formHeading="비밀번호 재설정" />
				<View style={styles.formContainer}>
					<View style={styles.resetPwdWrapper}>
						<TextInput
							style={[
								styles.textInput
								// this.state.isFocusedPwd ? styles.active : null,
								// !this.state.pwdValidate ? styles.error : null
							]}
							// onChangeText={text => this.validate(text, 'username')}
							onChangeText={value => this.setState({ password: value })}
							placeholder="새로운 비밀번호(8자리 이상)"
							onFocus={this.onFocusChange}
							secureTextEntry={this.state.showCurrentPassword}
							value={this.state.password}
							maxLength={8}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
							underlineColorAndroid="transparent"
						/>
						<TouchableOpacity style={styles.cross} onPress={this.clear}>
							<Image source={cross} />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.toggleCurrentPwd}>
							<Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.resetPwdWrapper}>
						<TextInput
							style={[
								styles.textInput
								// this.state.isFocusedPwd ? styles.active : null,
								// !this.state.pwdValidate ? styles.error : null
							]}
							// onChangeText={text => this.validate(text, 'username')}
							onChangeText={value => this.setState({ NewPassword: value })}
							placeholder="새로운 비밀번호(8자리 이상)"
							onFocus={this.onFocusNewPwdChange}
							secureTextEntry={this.state.showNewPassword}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
							value={this.state.NewPassword}
							maxLength={8}
							underlineColorAndroid="transparent"
						/>
						<TouchableOpacity style={styles.cross} onPress={this.clear}>
							<Image source={cross} />
						</TouchableOpacity>
						<TouchableOpacity onPress={this.toggleNewPwd}>
							<Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.resetPwdWrapper}>
						<TextInput
							style={[
								styles.textInput
								// this.state.isFocusedPwd ? styles.active : null,
								// !this.state.pwdValidate ? styles.error : null
							]}
							// onChangeText={text => this.validate(text, 'username')}
							onChangeText={value => this.setState({ confirmPassword: value })}
							placeholder="새로운 비밀번호(8자리 이상)"
							onFocus={this.onFocusConfirmPwdChange}
							secureTextEntry={this.state.showConfirmPassword}
							value={this.state.confirmPassword}
							maxLength={8}
							pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
							underlineColorAndroid="transparent"
						/>
						<TouchableOpacity style={styles.cross} onPress={this.clear}>
							<Image source={cross} />
						</TouchableOpacity>

						<TouchableOpacity onPress={this.toggleConfirmPwd}>
							<Text style={styles.forgotPwdLink}>비밀번호 보기</Text>
						</TouchableOpacity>
					</View>
					<Text style={styles.pwdInfo}>
						비밀번호는 아이디, 생년월일, 주민등록번호, 전화번호를 포함하지 않은 숫자와 영문자 및 특수문자 등을 혼합하여 8자리 이상 이어야 합니다
					</Text>
					<View style={styles.confirmBtn}>
						<MaterialButton
							text="변경"
							backgroundColor="purple"
							color="white"
							onPress={this.handleValidation}
							fontSize={16}
						/>
					</View>
				</View>
				{this.state.visibleAlert && <TopAlert alertMessage="비밀번호가 변경되었습니다" backgroundColor="success" />}
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
		fontSize: 14,
		lineHeight: 21,
		marginVertical: 10
	}
});
export default SettingPasswordScreen;
