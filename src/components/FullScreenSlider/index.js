import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, SafeAreaView, Text, Image } from 'react-native';
import imgAccesorry from '@assets/images/imgAccessory/imgAccesorry.png';
import imgBeauty from '@assets/images/imgBeauty/imgBeauty.png';
import imgCulture from '@assets/images/imgCulture/imgCulture.png';
import imgDigitalappliances from '@assets/images/imgDigitalAppliance/imgDigitalappliances.png';
import imgDrone from '@assets/images/imgDrone/imgDrone.png';
import styles from './styles';

export default class FullScreenSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0,
			carouselItems: [
				{
					id: '0',
					src: imgAccesorry
				},
				{
					id: '1',
					src: imgBeauty
				},
				{
					id: '2',
					src: imgCulture
				},
				{
					id: '3',
					src: imgDigitalappliances
				},
				{
					id: '4',
					src: imgDrone
				}
			]
		};
	}
	_renderItem({ item, index }) {
		return (
			<View>
				<View style={styles.sliderInrContainer}>
					<Image style={styles.carouselImg} source={item.src} key={index} />
				</View>
			</View>
		);
	}
	get pagination() {
		const { carouselItems, activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={carouselItems.length}
				activeDotIndex={activeSlide}
				containerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
				dotStyle={{
					width: 10,
					height: 10,
					borderRadius: 10,
					marginHorizontal: 0.5,
					backgroundColor: 'rgb(152, 84, 204)'
				}}
				inactiveDotStyle={{
					backgroundColor: 'rgb(243, 227, 254)'
				}}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		);
	}
	render() {
		return (
			<SafeAreaView style={styles.carouselContainer}>
				<Carousel
					layout={'default'}
					style={this.carouselWrapper}
					ref={ref => (this.carousel = ref)}
					data={this.state.carouselItems}
					sliderWidth={400}
					itemWidth={350}
					renderItem={this._renderItem}
					onSnapToItem={index => this.setState({ activeSlide: index })}
				/>
				{this.pagination}
			</SafeAreaView>
		);
	}
}
