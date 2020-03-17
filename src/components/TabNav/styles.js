import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	tabContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabButton: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabButtonText: {
		fontWeight: 'bold',
		fontSize: 16,
		color: global.black
	},
	activeTab: {
		color: global.purple,
		fontWeight: 'bold'
	}
}));
