import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import style from './style';
import SwitchCurrency from '../switch-currency/index';

import {LineChart} from 'react-native-chart-kit';
const Body = () => {
  return (
    <View style={style.container}>
      <View>
        <SwitchCurrency />
        <LineChart
          data={{
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 40}
          height={300}
          withDots={false}
          chartConfig={{
            fillShadowGradientToOpacity: 1,
            backgroundColor: '#fff',
            backgroundGradientFrom: '#a2d453',
            backgroundGradientTo: '#a2d453',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          withInnerLines={false}
          withOuterLines={false}
          withHorizontalLabels={false}
          style={style.chartContainer}
        />
      </View>
    </View>
  );
};

export default Body;
