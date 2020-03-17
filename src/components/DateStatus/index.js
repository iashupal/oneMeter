import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function DateStatus(props) {
	return (
		<View style={styles.dateStatusContainer}>
			<View style={styles.dateWrapper}>
				<Text style={styles.date}>{props.date}</Text>
			</View>
		</View>
	);
}
export default DateStatus;
