import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function InterestCard(props) {
	return (
		<View style={styles.imageWrapper}>
			<View style={styles.interestImages}>
				<Image source={props.intImage} />
				<Text style={styles.interestText}>{props.name}</Text>
			</View>
		</View>
	);
}

export default InterestCard;
