import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	materialRadioWrapper: {
		backgroundColor: global.white,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 40,
		paddingVertical: 40,
		height: 100
	},
	radioButton: {
		flexDirection: 'row',
		margin: 10,
		width: '100%'
	},
	radioButtonHolder: {
		borderRadius: 50,
		borderWidth: 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: 'rgb(130,135,143)',
		width: 25,
		height: 25
	},
	radioIcon: {
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(221,221,221)',
		width: 25,
		height: 25
	},
	label: {
		marginLeft: 10,
		fontSize: 20,
		color: 'rgb(130,135,143)'
	}
}));
