import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

import styles from "./styles";
import FullScreenSlider from "../FullScreenSlider";
import ScreenHint from "../ScreenHint";

const { width } = Dimensions.get("window");

const HotDealCard = props => {
  return (
    <ScrollView style={{ width }}>
      <View style={styles.verticalCardContainer}>
        <ScreenHint hintText="Hot Deal은 상품의 자표값과 동일한 좌표값을 뽑은 행운의 1인 에게 핫! 인생템을 무료로 드립니다." />
        {/* <View style={styles.sponsorCoupon}>
          <Image style={styles.image} source={info} resizeMode="contain" />
          <Text style={styles.couponText}>
            Hot Deal은 상품의 자표값과 동일한 좌표값을 뽑은 행운의 1인 에게 핫!
            인생템을 무료로 드립니다.
          </Text>
        </View> */}
        <View style={styles.sliderContainer}>
          <FullScreenSlider />
          <View style={styles.sliderInrInfo}>
            <Text style={styles.gameText}>삼성 셰프 컬렉션 양문형…</Text>
            <Text style={styles.wonPrice}>4,000,323원</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HotDealCard;
