import React, { Fragment } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function MaterialRadio(props) {
	return (
		<Fragment>
			<View style={styles.materialRadioWrapper}>
				<TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.radioButton}>
					<View
						style={[
							styles.radioButtonHolder,
							{
								backgroundColor: props.button.backgroundColor
							}
						]}
					>
						{props.button.selected ? (
							<View
								style={[
									styles.radioIcon,
									{
										backgroundColor: props.button.color
									}
								]}
							/>
						) : null}
					</View>
					<Text style={[styles.label]}>{props.button.label}</Text>
				</TouchableOpacity>
			</View>
		</Fragment>
	);
}

export default MaterialRadio;
