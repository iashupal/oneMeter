import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function AccordianHeading(props) {
	return (
		<View style={styles.accordianTextWrapper}>
			<Text style={styles.accordianHeadingText}>{props.accordHeading}</Text>
		</View>
	);
}
export default AccordianHeading;
