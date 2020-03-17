import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	accordianTextWrapper: {
		width: '100%',
		backgroundColor: global.purple
	},
	accordianHeadingText: {
		color: global.white,
		paddingHorizontal: 20,
		textAlign: 'left',
		height: 40,
		paddingVertical: 10
	}
}));
