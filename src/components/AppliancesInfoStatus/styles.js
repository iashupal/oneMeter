import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	applianceContainer: {
		width: '100%',
		paddingHorizontal: 20,
		flex: 1,
		borderBottomColor: 'rgb(238,238,238)',
		borderBottomWidth: 1,
		paddingBottom: 30
	},
	dateTime: {
		fontSize: 14,
		lineHeight: 20,
		color: 'rgb(130,135,143)',
		paddingVertical: 20
	},
	applianceText: {
		fontSize: 14,
		lineHeight: 20,
		color: 'rgb(130,135,143)'
	},
	applianceValues: {
		flexDirection: 'row',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	place: {
		fontSize: 16,
		lineHeight: 20,
		color: 'rgb(53,56,60)',
		fontWeight: 'bold'
	}
}));
