import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		alignSelf: 'flex-end',
		alignItems: 'center'
	},
	modalContent: {
		backgroundColor: 'white',
		justifyContent: 'center',
		padding: 30,
		width: '80%',
		top: '40%',
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
		borderColor: 'rgba(0, 0, 0, 0.1)'
	},

	modalBtnWrapper: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	modalMsg: {
		fontSize: 16,
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 15,
		lineHeight: 28,
		color: 'rgb(53,56,60)'
	},
	modalWrapper: {
		backgroundColor: 'rgba(100,59,167, 0.4)',
		flex: 1,
		alignItems: 'center',
		margin: 0,
		width: '100%',
		height: '100%'
	}
}));
