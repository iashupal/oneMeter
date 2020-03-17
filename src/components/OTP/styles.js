import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	otpWrapper: {
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: global.purple,
		paddingBottom: 5
	},
	otpContainer: {
		flexDirection: 'row',
		display: 'flex'
	},
	timer: {
		alignItems: 'center',
		paddingLeft: 10,
		paddingTop: 12,
		fontSize: 13,
		color: 'rgb(130,135,143)',
		justifyContent: 'center'
	},
	textInput: {
		marginVertical: 10
	},
	error: {
		borderColor: 'red'
	},
	active: {
		borderColor: 'rgb(100,59,167)'
	}
}));
