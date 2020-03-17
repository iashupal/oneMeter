/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from "react";
import {
  Dimensions,
  ScrollView
} from "react-native";
import Carousel from "react-native-snap-carousel";

import ScreenHint from "../components/ScreenHint";
import SponsorItem from "../components/SponsorItem";
import CouponInput from "../components/CouponInput";

class SponsorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      carouselItems: [
        {
          id: "0",
          image: "http://image.auction.co.kr/itemimage/19/78/ee/1978eec046.jpg",
          sponsor: "현대 자동차",
          dueDate: "D-1, 23:23:00",
          title: "삼성 셰프 컬렉션 양문형…",
          price: "4,000,323원"
        },
        {
          id: "1",
          image: "http://image.auction.co.kr/itemimage/19/78/ee/1978eec046.jpg",
          sponsor: "현대 자동차",
          dueDate: "D-1, 23:23:00",
          title: "삼성 셰프 컬렉션 양문형…",
          price: "4,000,323원"
        },
        {
          id: "2",
          image: "http://image.auction.co.kr/itemimage/19/78/ee/1978eec046.jpg",
          sponsor: "현대 자동차",
          dueDate: "D-1, 23:23:00",
          title: "삼성 셰프 컬렉션 양문형…",
          price: "4,000,323원"
        },
        {
          id: "3",
          image: "http://image.auction.co.kr/itemimage/19/78/ee/1978eec046.jpg",
          sponsor: "현대 자동차",
          dueDate: "D-1, 23:23:00",
          title: "삼성 셰프 컬렉션 양문형…",
          price: "4,000,323원"
        },
        {
          id: "4",
          image: "http://image.auction.co.kr/itemimage/19/78/ee/1978eec046.jpg",
          sponsor: "현대 자동차",
          dueDate: "D-1, 23:23:00",
          title: "삼성 셰프 컬렉션 양문형…",
          price: "4,000,323원"
        }
      ]
    };
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item, index }) {
    return (
      <SponsorItem
        key={index}
        image={item.image}
        sponsor={item.sponsor}
        dueDate={item.dueDate}
        title={item.title}
        price={item.price}
      />
    );
  }

  render() {
    const { carouselItems } = this.state;
    return (
      <>
        {/* <TopMenu /> */}
        <ScrollView>
          <ScreenHint hintText="스폰서는 늘 당신 주변에 있습니다. 직접 방문하여 쿠폰을 획득하고 응모 하세요! 상품당 보유 스폰서 쿠폰 12장 이상 참여 가능" />
          <Carousel
            layout="default"
            style={this.carouselWrapper}
            ref={ref => (this.carousel = ref)}
            data={carouselItems}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={Dimensions.get("window").width * 0.6}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({ activeSlide: index })}
          />
          <CouponInput couponCount="4" />
        </ScrollView>
      </>
    );
  }
}

export default SponsorScreen;
