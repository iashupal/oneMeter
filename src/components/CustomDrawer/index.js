import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import { DrawerItems } from "react-navigation";
import styles from "./styles";

function CustomDrawer(props) {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Text
          style={styles.closeDrawer}
          onPress={() => props.navigation.closeDrawer()}
        >
          x
        </Text>
      </TouchableOpacity>
      <View style={styles.userWrapper}>
        <Text style={styles.user}>홍길동 </Text>
        <Text style={styles.user}>1meter@gmail.com</Text>
      </View>
      <View>
        <DrawerItems style={styles.user} {...props} />
      </View>
    </SafeAreaView>
  );
}
export default CustomDrawer;
