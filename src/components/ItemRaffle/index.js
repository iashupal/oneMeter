import React from 'react';
import { View, Text, Image } from 'react-native';
import MaterialButton from '@components/MaterialButton';
import styles from './styles';

// raffleMoney: string
// raffleHoldings: string
// raffleWonPrice: string
function ItemRaffle(props) {
	return (
		<View>
			<View style={styles.itemRaffleContent}>
				<View display="flex" flexDirection="row">
					<Image source={props.coinImg} />
					<View style={styles.itemRaffleTextWrapper}>
						<Text style={styles.itemRaffleText}>{props.raffleMoney}</Text>
						<Text style={styles.itemRaffleTextPrice}>{props.raffleHoldings}</Text>
					</View>
				</View>
				<View style={styles.itemRaffleAmount}>
					<Text style={styles.itemRafflePrice}>{props.raffleWonPrice}</Text>
					<MaterialButton text="구매하기" backgroundColor="purple" color="white" />
				</View>
			</View>
		</View>
	);
}
export default ItemRaffle;
