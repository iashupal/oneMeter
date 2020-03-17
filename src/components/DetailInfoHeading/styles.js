import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	noticeToggleWrapper: {
		borderBottomColor: 'rgb(238,238,238)',
		borderBottomWidth: 1,
		paddingHorizontal: 20,
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	toggleText: {
		fontSize: 16,
		color: 'rgb(51,51,51)',
		lineHeight: 24
	}
}));
