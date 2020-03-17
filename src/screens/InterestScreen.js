import React, { Fragment } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import InterestCard from '@components/InterestCard';
import imgSmartDevice from '@assets/images/imgSmartDevice/imgSmartdevice.png';
import imgDrone from '@assets/images/imgDrone/imgDrone.png';
import imgAccesorry from '@assets/images/imgAccessory/imgAccesorry.png';
import imgBeauty from '@assets/images/imgBeauty/imgBeauty.png';
import imgCulture from '@assets/images/imgCulture/imgCulture.png';
import imgDigitalappliances from '@assets/images/imgDigitalAppliance/imgDigitalappliances.png';
import imgFashion from '@assets/images/imgFashion/imgFashion.png';
import imgFuniture from '@assets/images/imgFurniture/imgFuniture.png';
import imgGame from '@assets/images/imgGame/imgGame.png';
import imgHealtyfood from '@assets/images/imgHealthyFood/imgHealtyfood.png';
import imgKidult from '@assets/images/imgKidult/imgKidult.png';
import imgLesuire from '@assets/images/imgLesuire/imgLesuire.png';
import imgMobility from '@assets/images/imgMobile/imgMobility.png';
import imgOffice from '@assets/images/imgOffice/imgOffice.png';
import imgPet from '@assets/images/imgPet/imgPet.png';
import imgStationery from '@assets/images/imgStationery/imgStationery.png';
import imgTravel from '@assets/images/imgTravel/imgTravel.png';
import imgVvip from '@assets/images/imgVvip/imgVvip.png';
import TopPrevHeader from '@components/TopPrevHeader';
import path from '@assets/images/path/path.png';
const interestData = [
	{
		id: 0,
		src: imgSmartDevice,
		name: '스마트 디바이스'
	},
	{
		id: 1,
		src: imgDrone,
		name: '드론'
	},
	{
		id: 2,
		src: imgAccesorry,
		name: '악세사리'
	},
	{
		id: 3,
		src: imgBeauty,
		name: '뷰티'
	},
	{
		id: 4,
		src: imgCulture,
		name: '문화 / 공연'
	},
	{
		id: 5,
		src: imgDigitalappliances,
		name: '디지털/가전'
	},
	{
		id: 6,
		src: imgFashion,
		name: '패션/의류'
	},
	{
		id: 7,
		src: imgFuniture,
		name: '가구 / 인테리어'
	},
	{
		id: 8,
		src: imgGame,
		name: '게임'
	},
	{
		id: 9,
		src: imgHealtyfood,
		name: '식품 / 건강'
	},
	{
		id: 10,
		src: imgKidult,
		name: '캠핑 / 아웃도어'
	},
	{
		id: 12,
		src: imgLesuire,
		name: '레저/스포츠'
	},
	{
		id: 13,
		src: imgMobility,
		name: '모빌리티'
	},
	{
		id: 14,
		src: imgOffice,
		name: '오피스'
	},
	{
		id: 15,
		src: imgPet,
		name: '반려동물'
	},
	{
		id: 16,
		src: imgStationery,
		name: '아이디어 상품'
	},
	{
		id: 17,
		src: imgTravel,
		name: '국내 / 해외 여행'
	},
	{
		id: 18,
		src: imgVvip,
		name: 'VVIP'
	}
];
function InterestScreen(props) {
	return (
		<Fragment>
			<TopPrevHeader prevIcon={path} screenName="관심사 선택" next="다음" />
			<View style={styles.interestTextContainer}>
				<View style={styles.textWrapper}>
					<Text style={styles.interestText}>고객님의 관심사는 무엇입니까?</Text>
					<Text style={styles.interestText}>1개 이상 선택해주세요.</Text>
					<Text style={styles.interestText}>선택하신 관심사의 기획전이 운영되면 알려드립니다.</Text>
				</View>
			</View>
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true}>
				<View style={styles.interestImageContainer}>
					{Object.keys(interestData).map(key => {
						return (
							<InterestCard key={key} intImage={interestData[key].src} name={interestData[key].name} />
						);
					})}
				</View>
			</ScrollView>
		</Fragment>
	);
}
const styles = StyleSheet.create({
	interestImageContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		width: '100%'
	},
	interestTextContainer: {
		width: '100%',
		backgroundColor: 'white'
	},
	textWrapper: {
		marginVertical: 16,
		marginHorizontal: 16
	},
	interestText: {
		fontSize: 16,
		color: 'black',
		lineHeight: 24
	}
});
export default InterestScreen;
