import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

function FormHeading(props, compact) {
  return (
    <View style={[styles.headingContainer, compact && styles.headingPadding]}>
      <Text style={styles.formHeading}>{props.formHeading}</Text>
    </View>
  );
}

export default FormHeading;
