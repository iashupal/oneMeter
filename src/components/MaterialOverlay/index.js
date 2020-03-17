import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

//@logo: image
//@splashText: string
function MaterialOverlay(props) {
	return (
		<View style={styles.overlayContainer}>
			<Text style={styles.overlayText} visible={props.visible}>
				{props.overlayText}
			</Text>
		</View>
	);
}

export default MaterialOverlay;
