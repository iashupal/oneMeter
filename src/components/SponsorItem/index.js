import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const SponsorItem = ({ image, sponsor, title, dueDate, price, containerStyle, imageStyle }) => {
  return (
    <View style={[styles.itemContainer, containerStyle]}>
      <Image
        style={[styles.itemImage, imageStyle ]}
        source={{ uri: image }}
      />
      <View style={styles.itemContent}>
        {sponsor && (
          <View style={styles.itemMetaData}>
            <Text style={styles.itemSponsor}>스폰서 : {sponsor}</Text>
            <Text style={styles.itemDueDate}>{dueDate}</Text>
          </View>
        )}
        <Text allowFontScaling style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemPrice}>{price}</Text>
      </View>
    </View>
  );
};

SponsorItem.propTypes = {
  image: PropTypes.node,
  sponsor: PropTypes.string,
  title: PropTypes.string,
  dueDate: PropTypes.string,
  price: PropTypes.string
};

export default SponsorItem;
