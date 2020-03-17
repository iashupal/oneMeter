import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function AppliancesInfoStatus({ applianceInfo }) {
	return (
		<View>
			{Object.keys(applianceInfo).map(key => (
				<View style={styles.applianceContainer}>
					<Text style={styles.dateTime}>{applianceInfo[key].dateTime}</Text>
					<Text style={styles.applianceText}>{applianceInfo[key].exhibitionAppiance}</Text>
					<Text style={styles.applianceText}>{applianceInfo[key].applianceName}</Text>
					<View style={styles.applianceValues}>
						<Text style={styles.applianceText}>좌표값 : {applianceInfo[key].coordinateValue}</Text>
						<Text style={styles.place}>{applianceInfo[key].place}</Text>
					</View>
				</View>
			))}
		</View>
	);
}
export default AppliancesInfoStatus;
