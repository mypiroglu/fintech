import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: '#ffffff',
  },
  chartContainer: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: 20,
    width: Dimensions.get('window').width - 40,
    backgroundColor: '#fff',
  },
});
