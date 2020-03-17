import React, { Fragment } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TopPrevHeader from '@components/TopPrevHeader';
import MoneyHistory from '@components/MoneyHistory';
import path from '@assets/images/path/path.png';
import HistoryHeading from '@components/HistoryHeading';
import global from '@config/global_styles';
function History(props) {
	const moneyHistory = {
		0: {
			date: '19.04.30 21:16',
			meterMoney: '미터머니 10',
			number: 10
		},
		1: {
			date: '19.04.30 21:16',
			meterMoney: '미터머니 50',
			number: 50
		},
		2: {
			date: '19.04.30 21:16',
			meterMoney: '미터머니 100',
			number: 100
		}
	};
	const historyHeadings = {
		0: {
			purchaseDate: '구매날짜',
			itemName: '아이템명',
			quantity: '수량'
		}
	};
	return (
		<Fragment>
			<View style={styles.moneyContainer}>
				<TopPrevHeader prevIcon={path} screenName="미터머니" />
				<ScrollView showsVerticalScrollIndicator={true}>
					<HistoryHeading historyHeading={historyHeadings} />
					<MoneyHistory history={moneyHistory} />
				</ScrollView>
			</View>
		</Fragment>
	);
}
const styles = StyleSheet.create({
	moneyContainer: {
		backgroundColor: global.white,
		height: '100%',
		flex: 1,
		position: 'relative'
	},
	noticeToggleWrapper: {
		borderBottomColor: 'rgb(238,238,238)',
		borderBottomWidth: 1,
		paddingHorizontal: 20,
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
});
export default History;
