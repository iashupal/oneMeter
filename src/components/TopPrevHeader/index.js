import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

function TopPrevHeader({ prevIcon, onPress, screenName, next, showMenu }) {
  return (
    <View style={styles.prevImageContain}>
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
        onPress={onPress}
      >
        <Image
          source={prevIcon}
          style={showMenu ? styles.icon : styles.prevIcon}
        />
      </TouchableOpacity>
      <Text style={styles.screenName}>{screenName}</Text>
      <TouchableOpacity>
        <Text style={styles.nextText}>{next}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default TopPrevHeader;
