import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
const SwitchCurrency = () => {
  const [state, setstate] = useState(true);
  return (
    <View style={style.headerContainer}>
      <View style={style.topContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 100,
          }}>
          <Text style={style.headerText}>Forex.com</Text>
          <AntDesign name={'caretdown'} color={'gray'} />
        </View>

        <View style={style.imageContainer}>
          <AntDesign name={'caretdown'} color={'gray'} />
          <Image
            style={style.imageStyle}
            source={require('../../assets/flags/eur.png')}
          />
          <Image
            style={style.imageStyle}
            source={require('../../assets/flags/try.png')}
          />
        </View>
      </View>
      <Text style={style.headerContentText}>$113.66</Text>
      <View style={style.state}>
        <AntDesign
          name={state ? 'caretup' : 'caretdown'}
          color={state ? '#25ce96' : 'red'}
        />

        <Text
          style={[
            style.contentText,
            state ? {color: '#25ce96'} : {color: 'red'},
          ]}>
          {' '}
          +4.63(+3.42%)
        </Text>
      </View>
    </View>
  );
};

export default SwitchCurrency;
