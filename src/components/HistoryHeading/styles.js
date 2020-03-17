import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	noticeToggleWrapper: {
		borderBottomColor: 'rgb(238,238,238)',
		borderBottomWidth: 1,
		paddingHorizontal: 15,
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		display: 'flex'
	},
	headings: {
		fontSize: 16,
		lineHeight: 20,
		color: 'rgb(51,51,51)',
		fontWeight: 'bold'
	}
}));
