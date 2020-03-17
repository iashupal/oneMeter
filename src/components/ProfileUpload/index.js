import React from "react";
import { View, Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";

import styles from "./styles";

function ProfileUpload(props) {
  const { height, width, profilePic } = props;
  return (
    <View>
      <PhotoUpload
        onPhotoSelect={avatar => {
          if (avatar) {
            console.log("Image base64 string: ", avatar);
          }
        }}
      >
        <Image
          style={[styles.profileImg, { borderRadius: height / 2 }]}
          width={width}
          height={height}
          resizeMode="cover"
          // source={{
          // 	uri:
          // 		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='
          // }}

          source={profilePic}
        />
      </PhotoUpload>
    </View>
  );
}
export default ProfileUpload;
