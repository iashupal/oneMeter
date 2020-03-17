import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

function TabNav({ text, onPress, selected }) {
	return (
		<View style={styles.tabContainer}>
			<TouchableOpacity style={styles.tabButton} onPress={onPress}>
				<Text style={[styles.tabButtonText, selected ? styles.activeTab : {}]}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default TabNav;
