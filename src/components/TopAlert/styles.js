import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	alertContainer: {
		flexDirection: 'row',
		width: '100%',
		height: 60,
		backgroundColor: global.danger,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		paddingVertical: 20,
		paddingHorizontal: 20
	},
	alertContent: {
		top: 10,
		right: 20,
		bottom: 10,
		left: 20,
		position: 'absolute'
	},
	alertImage: {
		paddingRight: 10,
		position: 'absolute'
	},
	alertText: {
		color: 'white',
		alignItems: 'center',
		width: '100%',
		position: 'absolute',
		paddingLeft: 30,
		fontSize: 14,
		letterSpacing: 0.5
	}
}));
