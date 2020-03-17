import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	interestText: {
		fontSize: 16,
		color: 'black',
		lineHeight: 24,
		marginTop: 10
	},
	imageWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		paddingVertical: 16,
		paddingLeft: '5%'
	}
}));
