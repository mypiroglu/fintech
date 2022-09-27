import React from 'react';
import {View} from 'react-native';
import Header from './src/components/header/index';
import Body from './src/components/body/index';
import style from './src/style/rootStyle';
const App = () => {
  return (
    <View style={style.container}>
      <Header />
      <Body />
    </View>
  );
};

export default App;
