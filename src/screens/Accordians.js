import React, { Component, Fragment } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Accordian from '@components/Accordian';
import AccordianHeading from '@components/AccordianHeading';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
import global from '@config/global_styles';

class Accordians extends Component {
	constructor(props) {
		super();
		this.state = {
			menu: [
				{
					title: '최대글자수표기는17자입니다.길어질 경우입니다…',
					data: '안녕하세요',
					data1: 'imter앱 업데이트 지원과 관련하여 사전 안내 말씀 드립니다.',
					data2:
						'전체 속도 개선 및 안정성을 강화하기 위해 1월 중 업데이트 예정인 iOSimter앱 7.7.0 버전부터, iOS 9.0.0 이상 버전에t서 가능하도록 지원 환경을 조정하게 되었습니다.',
					data3:
						'iOS 9.0.0 미만 유저의 경우 업데이트 지원은 종료되지만, 현재 이용중인 데얼앱은 계속 동일한 사양으로 이용 가능하며 데얼앱을 삭제한 후, 새로 설치하고자 할 경우에도 앱스토어를 통해 네이버앱을 다운로드하여 기존처럼 이용할 수 있습니다.',
					data4:
						'이번 지원 스펙 변경을 통해 데얼앱을 최신 iOS버전에서 더욱 빠르고 안정적인 환경으로 서비스를 이용하실 수 있도록 최선을 다하겠으며 앞으로도 급변하는 OS 환경 및 신기술에 빠르게 대응할 수 있도록 열심히 연구하고 개선해 나가겠습니다.',
					data5: '감사합니다.'
				},
				{
					title: '최대글자수표기는17자입니다.길어질 경우입니다…',
					data:
						'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven. In formal settings, like a restaurant, pizza is eaten with knife and fork, but in casual settings it is cut into wedges to be eaten while held in the hand. Small pizzas are sometimes called pizzettas.'
				},
				{
					title: '최대글자수표기는17자입니다.길어질 경우입니다…',
					data:
						'A drink (or beverage) is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, coffee, tea, hot chocolate, juice and soft drinks. In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years.'
				},
				{
					title: '최대글자수표기는17자입니다.길어질 경우입니다…',
					data:
						'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
				},
				{
					title: '핫딜은 하루에 한번만 가능한가요?',
					data:
						'A dessert is typically the sweet course that concludes a meal in the culture of many countries, particularly Western culture. The course usually consists of sweet foods, but may include other items. The word "dessert" originated from the French word desservir "to clear the table" and the negative of the Latin word servire'
				}
			]
		};
	}

	render() {
		return (
			<Fragment>
				<View style={styles.accordiansContainer}>
					<TopPrevHeader prevIcon={path} screenName="고객 센터" />
					<AccordianHeading accordHeading="핫딜" />
					<ScrollView showsVerticalScrollIndicator={true}>
						<View style={styles.container}>{this.renderAccordians()}</View>
					</ScrollView>
				</View>
			</Fragment>
		);
	}
	renderAccordians = () => {
		const items = [];
		for (item of this.state.menu) {
			items.push(
				<Accordian
					title={item.title}
					data={item.data}
					data1={item.data1}
					data2={item.data2}
					data3={item.data3}
					data4={item.data4}
					data5={item.data5}
				/>
			);
		}
		return items;
	};
}
const styles = StyleSheet.create({
	accordiansContainer: {
		backgroundColor: global.white,
		height: '100%',
		flex: 1,
		position: 'relative'
	}
});
export default Accordians;
