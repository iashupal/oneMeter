import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 40,
		width: 185,
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: 'rgb(221,221,221)'
	},
	tabs: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center'
	},
	tabText: {
		fontSize: 14,
		color: 'black',
		fontWeight: 'bold',
		lineHeight: 20
	},
	active: {
		backgroundColor: global.purple,
		borderColor: 'transparent'
	},
	activeText: {
		color: global.white
	}
}));
