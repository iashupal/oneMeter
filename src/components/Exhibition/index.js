/* eslint-disable class-methods-use-this */
import React, { Component, Fragment } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

import SponsorItem from "../SponsorItem";

class ExhibitionScreen extends Component {
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
        containerStyle={{ marginTop: "20%", marginBottom: "20%" }}
        imageStyle={{ width: 200, height: 300 }}
        key={index}
        image={item.image}
        // sponsor={item.sponsor}
        // dueDate={item.dueDate}
        title={item.title}
        price={item.price}
      />
    );
  }

  render() {
    return (
      <>
        {/* <TopMenu /> */}
        <Carousel
          layout="default"
          // style={this.carouselWrapper}
          ref={ref => (this.carousel = ref)}
          data={this.state.carouselItems}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width * 0.7}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeSlide: index })}
        />
      </>
    );
  }
}

export default ExhibitionScreen;
