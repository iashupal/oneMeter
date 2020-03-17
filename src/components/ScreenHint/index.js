import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import info from "@assets/images/imgInfo/info.png";
import styles from './styles';

const ScreenHint = ({ hintText }) => {
  return (
    <View style={styles.hintContainer}>
      <Image style={styles.image} resizeMode="contain" source={info} />
      <Text style={styles.couponText}>{hintText}</Text>
    </View>
  );
};

ScreenHint.propTypes = {
  hintText: PropTypes.string
};

export default ScreenHint;
