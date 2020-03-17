import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import next from "@assets/icons/next.png";
import styles from "./styles";

const DetailInfoHeading = React.forwardRef(({ detailInfo, onPress }, ref) => {
  return (
    <View>
      {Object.keys(detailInfo).map(key => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => onPress(key)}
          key={key}
          style={styles.noticeToggleWrapper}
        >
          <Text ref={ref} style={styles.toggleText}>{detailInfo[key].detailHeading}</Text>
          <Image source={next} />
        </TouchableOpacity>
      ))}
    </View>
  );
});

export default DetailInfoHeading;
