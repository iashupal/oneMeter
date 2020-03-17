import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import MaterialButton from '../MaterialButton';
import styles from './styles';

class MaterialModal extends Component {
	state = {
		visibleModal: null
	};
	_renderButton = (text, onPress, backgroundColor, color) => (
		<View style={styles.button}>
			<MaterialButton onPress={onPress} text={text} backgroundColor={backgroundColor} color={color} />
		</View>
	);
	_renderModalContent = () => (
		<View style={styles.modalWrapper}>
			<View style={styles.modalContent}>
				<Text style={styles.modalMsg}>{this.props.modalMessage}</Text>
				<View style={styles.modalBtnWrapper}>
					{this._renderButton('충전', () => this.setState({}), 'primary', 'white')}
					{this._renderButton('닫기', () => this.setState({ visibleModal: null }), 'lightgray', 'black')}
				</View>
			</View>
		</View>
	);
	render() {
		return (
			<View style={styles.container}>
				{this._renderButton('응모하기', () => this.setState({ visibleModal: 1 }), 'primary', 'white')}
				<Modal
					isVisible={this.state.visibleModal === 1}
					useNativeDrivers
					style={{ margin: 0 }}
					transparent={true}
					animationIn={'zoomIn'}
					animationOut={'zoomOut'}
					animationInTiming={1000}
					animationOutTiming={1000}>
					{this._renderModalContent()}
				</Modal>
			</View>
		);
	}
}

export default MaterialModal;
