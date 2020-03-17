import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function HistoryHeading({ historyHeading }) {
	return (
		<View>
			{Object.keys(historyHeading).map(key => (
				<View style={styles.noticeToggleWrapper}>
					<Text style={styles.headings}>{historyHeading[key].purchaseDate}</Text>
					<Text style={styles.headings}>{historyHeading[key].itemName}</Text>
					<Text style={styles.headings}>{historyHeading[key].quantity}</Text>
				</View>
			))}
		</View>
	);
}
export default HistoryHeading;
