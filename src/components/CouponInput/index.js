import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import MaterialButton from '../MaterialButton';
import styles from './styles';

function CouponInput({ couponCount }) {
  return (
    <View style={styles.gameContainer}>
      <View style={styles.gameContent}>
        <Text style={styles.gameText}>보유 스폰서 쿠폰</Text>
        <Text style={styles.gameText}>
          <Text style={styles.gameNum}>{couponCount}</Text>장
        </Text>
        <MaterialButton
          text="쿠폰 입력"
          backgroundColor="darkPurple"
          color="white"
          fontSize={16}
        />
      </View>
    </View>
  );
}

CouponInput.propTypes = {
  couponCount: PropTypes.string,
};

export default CouponInput;
