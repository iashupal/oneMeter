import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import global_styles from '@config/global_styles';

//text: string
function MaterialButton(props) {
	return (
		<TouchableOpacity
			style={{ ...styles.buttonContainer, backgroundColor: global_styles[props.backgroundColor] }}
			onPress={props.onPress}
		>
			<Text style={{ ...styles.buttonText, color: global_styles[props.color], fontSize: props.fontSize }}>
				{props.text}
			</Text>
		</TouchableOpacity>
	);
}

export default MaterialButton;
