import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    height: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: -60,
    shadowColor: '#000',
    elevation: 100,
    paddingBottom: 30,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1f2122',
  },
  headerContentText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
  },
  state: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  contentText: {
    fontSize: 15,
    color: '#25ce96',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});
