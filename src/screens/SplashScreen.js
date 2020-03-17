import React from 'react';
import MLogoBluePurple from '@assets/logo/MLogoBluePurple.png';
import { View, Text, StyleSheet, Image } from 'react-native';

function SplashScreen(props) {
	return (
		<View style={styles.splashContainer}>
			<Image source={MLogoBluePurple} style={styles.logoImg} />
			<Text style={styles.splashText}>당신의 인생템, 1m 안에 있습니다</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	splashContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logoImg: {
		width: 74,
		height: 41
	},
	splashText: {
		fontSize: 16,
		color: 'rgb(41, 17, 78)',
		marginVertical: 15
	}
});

export default SplashScreen;
