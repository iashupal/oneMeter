import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function ConfirmationMsg(props) {
	return (
		<View style={styles.confirmMsgContainer}>
			<Text style={styles.confirmMsg}>{props.confirmMsg}</Text>
		</View>
	);
}
export default ConfirmationMsg;
