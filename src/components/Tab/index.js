import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

function Tab({ text, selected, onPress }) {
  return (
    <View style={[styles.tabContainer, selected ? styles.active : {}]}>
      <TouchableOpacity style={styles.tabs} onPress={onPress}>
        <Text style={[styles.tabText, selected ? styles.activeText : {}]}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Tab.defaultProps = {
  selected: false
};

export default Tab;
