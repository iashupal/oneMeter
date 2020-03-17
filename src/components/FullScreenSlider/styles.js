import { StyleSheet } from 'react-native';
import global from '@config/global_styles';

export default (styles = StyleSheet.create({
	carouselContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	carouselWrapper: {
		width: '100%',
		height: '100%',
		backgroundColor: global.white
	},
	carouselImg: {
		width: 200,
		height: 250,
		alignItems: 'center',
		resizeMode: 'cover'
	},

	sliderInrContainer: {
		backgroundColor: 'rgba(255,255,255,0.07)',
		alignItems: 'center',
		borderRadius: 10,
		paddingVertical: 16,
		paddingHorizontal: 16
	}
}));
