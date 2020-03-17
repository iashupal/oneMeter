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
		padding: 0,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		borderColor: 'rgba(0, 0, 0, 0.3)'
	},
	bottomModal: {
		justifyContent: 'flex-end',
		margin: 0
	},
	signupModalInfo: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20
	},
	signupHeading: {
		fontSize: 22,
		lineHeight: 32,
		color: 'black',
		marginBottom: 5,
		textAlign: 'center',
		fontWeight: 'bold'
	},
	signupButton: {
		width: '100%',
		flexDirection: 'row',
		borderColor: 'rgb(238,238,238)',
		borderRadius: 30,
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 12,
		marginTop: 10,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	socialText: {
		fontSize: 16,
		lineHeight: 21,
		color: 'rgb(53,56,60)',
		paddingLeft: 15
	},
	loginText: {
		fontWeight: 'bold',
		marginTop: 15
	},
	termsWrapper: {
		flexDirection: 'row',
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'flex-start',
		textAlign: 'left'
	},
	personalInfoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		textAlign: 'left'
	},
	termsText: {
		fontSize: 14,
		lineHeight: 21,
		color: 'rgb(130,135,143)',
		paddingLeft: 3
	}
}));
