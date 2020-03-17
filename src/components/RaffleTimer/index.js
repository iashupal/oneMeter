import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

//time: string
function RaffleTimer(props) {
	return (
		<View style={styles.timerContainer}>
			<Text style={styles.timerText}>{props.time}</Text>
		</View>
	);
}
export default RaffleTimer;
