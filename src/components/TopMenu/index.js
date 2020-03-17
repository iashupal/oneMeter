import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import menuIcon from "@assets/icons/ic_menu/ic_menu.png";
import metermoneybox from "@assets/images/metermoneybox/metermoneybox.png";
import coin from "@assets/icons/coin/coin.png";
import icLogoPurple from "@assets/icons/ic_logo_Purple/ic_logo_Purple.png";
import styles from "./styles";

function TopMenu({ onPress }) {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={{ paddingLeft: 10 }} onPress={onPress}>
          <Image source={menuIcon} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity disabled>
          <Image
            source={icLogoPurple}
            style={{ height: "80%", resizeMode: "contain" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <Image source={coin} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={metermoneybox} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TopMenu;
