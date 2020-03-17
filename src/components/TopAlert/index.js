import React from 'react';
import { View, Text, Image } from 'react-native';
import white from '@assets/images/imgWhiteNotification/white.png';
import global_styles from '@config/global_styles';
import styles from './styles';

function TopAlert(props) {
	return (
		<View style={{ ...styles.alertContainer, backgroundColor: global_styles[props.backgroundColor] }}>
			<View style={styles.alertContent}>
				<Image source={white} style={styles.alertImage} />
				<Text style={styles.alertText}>{props.alertMessage}</Text>
			</View>
		</View>
	);
}
export default TopAlert;
