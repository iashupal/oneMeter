import React, { Fragment } from 'react';
import { View, ScrollView } from 'react-native';
import MaterialButton from '@components/MaterialButton';
import styles from './styles';
import DateStatus from '../DateStatus';
import AppliancesInfoStatus from '../AppliancesInfoStatus';

function TodaysStatus(props) {
	const applianceInformation = {
		0: {
			dateTime: '2019.07.29  21:16',
			exhibitionAppiance: '가전전',
			applianceName: 'LG 시그니처 세탁기',
			coordinateValue: '0482526,245785',
			place: '5위'
		},
		1: {
			dateTime: '2019.07.29  19:16',
			exhibitionAppiance: '가전전',
			applianceName: 'LG 시그니처 세탁기',
			coordinateValue: '0482526,245785',
			place: '3위'
		},
		2: {
			dateTime: '2019.07.29  18:16',
			exhibitionAppiance: '가전전',
			applianceName: 'LG 시그니처 세탁기',
			coordinateValue: '0482526,245785',
			place: '19,999위'
		}
	};
	return (
		<Fragment>
			<ScrollView>
				<View style={styles.statusContainer}>
					<View style={styles.confirmBtn}>
						<MaterialButton
							text="조회"
							backgroundColor="purple"
							color="white"
							onPress={this.handleValidation}
							fontSize={16}
						/>
					</View>
					<DateStatus date="2019.07.29 ~ 2019. 07.29" />
					<AppliancesInfoStatus applianceInfo={applianceInformation} />
				</View>
			</ScrollView>
		</Fragment>
	);
}
export default TodaysStatus;
