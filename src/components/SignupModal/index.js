import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialButton from '@components/MaterialButton';
import Modal from 'react-native-modal';
import ic_facebook from '@assets/icons/ic_facebook/ic_facebook.png';
import ic_google from '@assets/icons/ic_google/ic_google.png';
import ic_kakao from '@assets/icons/ic_kakao/ic_kakao.png';
import ic_naver from '@assets/icons/ic_naver/ic_naver.png';
import styles from './styles';

export default class SignupModal extends Component {
	state = {
		visibleModal: null
	};

	_renderButton = (text, onPress, backgroundColor, color) => (
		<View style={styles.button}>
			<MaterialButton onPress={onPress} text={text} backgroundColor={backgroundColor} color={color} />
		</View>
	);

	_renderModalContent = () => (
		<View style={styles.modalContent}>
			{this._renderButton('X', () => this.setState({ visibleModal: null }), 'white', 'black')}
			<View style={styles.signupModalInfo}>
				<Text style={styles.signupHeading}>2초만에 1미터 계정만드시고 더 많은 혜택 가져가셔요</Text>
				<TouchableOpacity style={styles.signupButton}>
					<Image source={ic_kakao} />
					<Text style={styles.socialText}>카카오로 로그인/회원가입 </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signupButton}>
					<Image source={ic_naver} />
					<Text style={styles.socialText}>네이버로 로그인/회원가입 </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signupButton}>
					<Image source={ic_facebook} />
					<Text style={styles.socialText}>페이스북으로 로그인/회원가입 </Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.signupButton}>
					<Image source={ic_google} />
					<Text style={styles.socialText}>구글로 로그인/회원가입 </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={[styles.socialText, styles.loginText]}>이메일로 회원가입 / 로그인</Text>
				</TouchableOpacity>
				<View style={styles.termsWrapper}>
					<Text style={styles.termsText}>회원가입을 함으로써 ,</Text>
					<TouchableOpacity>
						<Text style={styles.termsText}>이용약관</Text>
					</TouchableOpacity>
					<Text style={styles.termsText}>및</Text>
					<TouchableOpacity>
						<Text style={styles.termsText}>개인정보 처리방침 ,</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.personalInfoWrapper}>
					<TouchableOpacity>
						<Text style={styles.termsText}>개인 정보 제3자 제공</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.termsText}>에 동의 합니다.</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);

	render() {
		return (
			<View style={styles.container}>
				{this._renderButton('응모하기', () => this.setState({ visibleModal: 0 }), 'primary', 'white')}

				<Modal
					isVisible={this.state.visibleModal === 0}
					style={styles.bottomModal}
					useNativeDrivers
					transparent={true}
					backdropColor={'transparent'}
				>
					{this._renderModalContent()}
				</Modal>
			</View>
		);
	}
}
