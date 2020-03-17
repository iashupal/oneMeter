import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	timerContainer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
		position: 'absolute',
		paddingHorizontal: 9,
		bottom: 5,
		left: 3,
		right: 3
	},
	timerText: {
		color: global.primary,
		fontSize: 10,
		letterSpacing: 0.29,
		fontWeight: 'bold'
	}
}));
