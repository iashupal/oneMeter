import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function MoneyHistory({ history }) {
	return (
		<View>
			{Object.keys(history).map(key => (
				<View style={styles.noticeToggleWrapper}>
					<Text style={styles.toggleText}>{history[key].date}</Text>
					<Text style={[styles.toggleText, styles.moneyNum]}>{history[key].meterMoney}</Text>
					<Text style={styles.number}>{history[key].number}</Text>
				</View>
			))}
		</View>
	);
}
export default MoneyHistory;
