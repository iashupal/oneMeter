import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import MaterialButton from '@components/MaterialButton';
import styles from './styles';

class OTP extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: '',
			numValidate: true,
			isFocusedNumber: false,
			visibleAlert: false
		};
		this.handleValidation = this.handleValidation.bind(this);
		this.onFocusNumberChange = this.onFocusNumberChange.bind(this);
	}
	validate(text, type) {
		num = /^[0-9]+$/;
		message = '1Meter 회원으로 가입되어 있지 않습니다. 회원가입 해주시길 바랍니다.';
		if (type == 'number') {
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
	onFocusNumberChange() {
		this.setState({ isFocusedNumber: true });
	}
	onFocus() {
		this.setState({
			borderBottomColor: global_styles.primary,
			borderBottomWidth: 1
		});
	}
	handleValidation() {}
	render() {
		return (
			<View style={styles.otpWrapper}>
				<View style={styles.otpContainer}>
					<View>
						<MaterialButton
							text="재요청"
							backgroundColor="purple"
							color="white"
							onPress={this.handleValidation}
							fontSize={16}
						/>
					</View>
					<Text style={styles.timer}>03:00</Text>
				</View>
				<View>
					<TextInput
						style={[
							styles.textInput,
							this.state.isFocusedNumber ? styles.active : null,
							!this.state.numValidate ? styles.error : null
						]}
						onChangeText={text => this.validate(text, 'number')}
						placeholder="휴대폰 번호"
						maxLength={10}
						onFocus={this.onFocusNumberChange}
						underlineColorAndroid="transparent"
					/>
				</View>
			</View>
		);
	}
}
export default OTP;
