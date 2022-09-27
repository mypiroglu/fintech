import React from 'react';
import {View, Text} from 'react-native';
import style from './style';
const Header = () => {
  return (
    <View style={style.headerContainer}>
      <Text style={style.headerText}>Forex Exchange</Text>
      <Text style={style.headerContentText}>
        Checkout the current price on different exchanges for a currency pair
      </Text>
    </View>
  );
};

export default Header;
