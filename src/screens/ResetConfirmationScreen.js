import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import FormHeading from '@components/FormHeading';
import ConfirmationMsg from '@components/ConfirmationMsg';
import global from '@config/global_styles';

function ResetConfirmationScreen(props) {
	return (
		<View style={styles.findIdContainer}>
			<TopPrevHeader prevIcon={path} />
			<FormHeading formHeading="비밀번호를 다시
                설정하세요." />
			<ConfirmationMsg confirmMsg="암호 재설정 요청이 만료되었거나 링크가 이미 해제 되었습니다. 비밀번호 변경을 다시 요청해주세요." />
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
export default ResetConfirmationScreen;
