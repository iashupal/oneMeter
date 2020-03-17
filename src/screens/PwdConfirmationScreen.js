import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import FormHeading from '@components/FormHeading';
import MaterialButton from '@components/MaterialButton';
import ConfirmationMsg from '@components/ConfirmationMsg';
import global from '@config/global_styles';

function PwdConfirmationScreen(props) {
	return (
		<View style={styles.findIdContainer}>
			<TopPrevHeader prevIcon={path} />
			<FormHeading formHeading="비밀번호 찾기" />
			<ConfirmationMsg confirmMsg="elly@gmail.co.kr 으로 비밀번호를 재설정 링크를 보냈습니다. 이메일 확인해 비밀번호를 재설정 해주세요." />
			<View style={styles.confirmBtn}>
				<MaterialButton
					text="로그인으로 돌아가기"
					backgroundColor="purple"
					color="white"
					onPress={this.onPress}
					fontSize={16}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	findIdContainer: {
		backgroundColor: global.white,
		height: '100%',
		flex: 1,
		position: 'relative'
	},
	confirmBtn: {
		marginVertical: 30,
		paddingHorizontal: 40,
		width: '100%'
	}
});
export default PwdConfirmationScreen;
