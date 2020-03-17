import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: global.primary,
		borderRadius: 20,
		alignItems: 'center',
		paddingVertical: 10,
		paddingHorizontal: 20
	},
	buttonText: {
		color: global.white,
		fontSize: 13,
		letterSpacing: 0.37,
		fontWeight: 'bold'
	}
}));
