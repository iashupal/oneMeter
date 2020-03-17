import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import info from "@assets/images/imgInfo/info.png";
import metermoneybox from "@assets/images/metermoneybox/metermoneybox.png";
import icCoin from "@assets/icons/ic_coin/ic_coin.png";
import ItemRaffle from "@components/ItemRaffle";
import styles from "./styles";

const itemData = [
  {
    id: 0,
    src: icCoin,
    money: "미터머니 + 10",
    holdings: "보유미터머니 430개",
    price: "5,000원"
  },
  {
    id: 0,
    src: icCoin,
    money: "미터머니 + 10",
    holdings: "보유미터머니 430개",
    price: "5,000원"
  },
  {
    id: 0,
    src: icCoin,
    money: "미터머니 + 10",
    holdings: "보유미터머니 430개",
    price: "5,000원"
  },
  {
    id: 0,
    src: icCoin,
    money: "미터머니 + 10",
    holdings: "보유미터머니 430개",
    price: "5,000원"
  },
  {
    id: 0,
    src: icCoin,
    money: "미터머니 + 10",
    holdings: "보유미터머니 430개",
    price: "5,000원"
  }
];
const Item = props => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.sponsorCoupon}>
        <Image source={info} />
        <View style={styles.itemTextWrapper}>
          <Text style={styles.couponText}>
            핫딜, 기획전에 응모하기 위해선 미터머니가 필요합니다. 1일 최대 6개의
            <Image
              style={{
                width: 20,
                height: 20,
                paddingLeft: 60,
                marginRight: -30,
                resizeMode: "contain"
              }}
              source={metermoneybox}
            />{" "}
            미터머니가 Free!!
          </Text>
        </View>
      </View>
      {/* <ScrollView style={styles.scrollContainer}> */}
      <View style={styles.itemRaffleCard}>
        {Object.keys(itemData).map(key => {
          return (
            <ItemRaffle
              key={key}
              coinImg={itemData[key].src}
              raffleMoney={itemData[key].money}
              raffleHoldings={itemData[key].holdings}
              raffleWonPrice={itemData[key].price}
            />
          );
        })}
      </View>
      {/* </ScrollView> */}
    </ScrollView>
  );
};
export default Item;
