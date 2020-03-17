import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	itemRaffleContent: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: global.white,
		justifyContent: 'space-between',
		padding: 20,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		width: '100%',
		marginBottom: 15
	},
	itemRaffleTextWrapper: {
		paddingLeft: 20
	},
	itemRaffleAmount: {
		textAlign: 'center'
	},
	itemRaffleText: {
		fontSize: 18,
		color: global.black
	},
	itemRaffleTextPrice: {
		fontSize: 14,
		color: 'rgb(173,177,184)'
	},
	itemRafflePrice: {
		fontSize: 14,
		color: global.black,
		textAlign: 'center'
	}
}));
