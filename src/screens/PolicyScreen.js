import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import path from '@assets/images/path/path.png';
import Tab from '@components/Tab';
import Terms from '@components/Terms';
import Policy from '@components/Policy';
import global from '@config/global_styles';
import TopPrevHeader from '@components/TopPrevHeader';

class PolicyScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: 0
		};
		this.changeTab = this.changeTab.bind(this);
	}

	changeTab(tab) {
		this.setState({ tab });
	}

	render() {
		const { tab } = this.state;
		return (
			<View style={styles.policyContainer}>
				<TopPrevHeader prevIcon={path} />
				<View display="flex" flexDirection="row">
					<Tab selected={tab === 0} text="이용 약관" onPress={() => this.changeTab(0)} />
					<Tab selected={tab === 1} text="개인정보 취급 방침" onPress={() => this.changeTab(1)} />
				</View>
				{tab === 0 && <Terms />}
				{tab === 1 && <Policy />}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	policyContainer: {
		backgroundColor: global.white
	}
});
export default PolicyScreen;
