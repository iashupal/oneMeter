import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialRadio from '@components/MaterialRadio';
import TopPrevHeader from '@components/TopPrevHeader';
import FormHeading from '@components/FormHeading';
import path from '@assets/images/path/path.png';
import global from '@config/global_styles';
import MaterialButton from '@components/MaterialButton';

class RadioBtnScreen extends Component {
	constructor() {
		super();

		this.state = {
			radioItems: [
				{
					label: '남자',
					size: 16,
					color: 'rgb(100,59,167)',
					selected: false
				},

				{
					label: '여자',
					color: 'rgb(100,59,167)',
					size: 16,
					selected: true
				}
			],
			selectedItem: ''
		};
	}
	componentDidMount() {
		this.state.radioItems.map(item => {
			if (item.selected == true) {
				this.setState({ selectedItem: item.label });
			}
		});
	}

	changeActiveRadioButton(index) {
		this.state.radioItems.map(item => {
			item.selected = false;
		});

		this.state.radioItems[index].selected = true;

		this.setState({ radioItems: this.state.radioItems }, () => {
			this.setState({ selectedItem: this.state.radioItems[index].label });
		});
	}
	render() {
		return (
			<View style={styles.radioBtnScreen}>
				<TopPrevHeader prevIcon={path} />
				<FormHeading formHeading="성별" />
				<View style={[styles.radioBtnContainer]}>
					{this.state.radioItems.map((item, key) => (
						<MaterialRadio key={key} button={item} onPress={this.changeActiveRadioButton.bind(this, key)} />
					))}
				</View>
				<View style={styles.confirmBtn}>
					<MaterialButton
						text="확인"
						backgroundColor="purple"
						color="white"
						onPress={this.onPress}
						fontSize={16}
					/>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	radioBtnScreen: {
		backgroundColor: global.white,
		height: '100%',
		flex: 1,
		position: 'relative'
	},
	radioBtnContainer: {
		flexDirection: 'row',
		width: '100%'
	},
	selectedTextHolder: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		padding: 15,
		backgroundColor: 'rgba(221,221,221,0.6)',
		justifyContent: 'center',
		alignItems: 'center'
	},
	selectedText: {
		fontSize: 18,
		color: 'white'
	},
	confirmBtn: {
		marginVertical: 40,
		paddingHorizontal: 40,
		width: '100%'
	}
});
export default RadioBtnScreen;
