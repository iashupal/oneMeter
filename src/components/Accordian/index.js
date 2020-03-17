import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import close from '@assets/icons/close.png';
import open from '@assets/icons/open.png';
import global from '@config/global_styles';

export default class Accordian extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: props.data,
			expanded: false
		};
	}

	render() {
		return (
			<View style={styles.accordianWrapper}>
				<TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
					<Image source={this.state.expanded ? open : close} size={30} />
					<Text style={[styles.title, styles.font]}>{this.props.title}</Text>
				</TouchableOpacity>
				<View style={styles.parentHr} />
				{this.state.expanded && (
					<View style={styles.child}>
						<Text style={styles.accordChild}>{this.props.data}</Text>
						<Text style={styles.accordChild}>{this.props.data1}</Text>
						<Text style={[styles.accordChild, styles.accordContent]}>{this.props.data2}</Text>
						<Text style={[styles.accordChild, styles.accordContent]}>{this.props.data3}</Text>
						<Text style={[styles.accordChild, styles.accordContent]}>{this.props.data4}</Text>
						<Text style={styles.accordChild}>{this.props.data5}</Text>
					</View>
				)}
			</View>
		);
	}

	toggleExpand = () => {
		this.setState({ expanded: !this.state.expanded });
	};
}

const styles = StyleSheet.create({
	accordianWrapper: {
		backgroundColor: global.white
	},
	title: {
		fontSize: 16,
		paddingLeft: 15,
		color: 'rgb(37,43,56)'
	},
	row: {
		flexDirection: 'row',
		height: 56,
		paddingLeft: 15,
		paddingRight: 18,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(238,238,238)'
	},
	parentHr: {
		height: 1,
		width: '100%'
	},
	child: {
		padding: 16
	},
	accordChild: {
		fontSize: 13,
		lineHeight: 20,
		color: 'rgb(53,56,60)'
	},
	accordContent: {
		marginVertical: 15
	}
});
